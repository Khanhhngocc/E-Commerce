import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { sendMail } from '../../../helpers/sendMail.js';
import verificationEmail from '../../../helpers/verifyEmailTemplate.js';
import generatedAccessToken from '../../../helpers/generatedAccessToken.js';
import generatedRefreshToken from '../../../helpers/generatedRefreshToken.js';

import { v2 as cloudinary } from 'cloudinary';
import fs, { symlink } from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_SECRET,
    secure: true
});

// [POST] /api/user/register
export async function registerUserController(req, res) {
    const {name, email, password}= req.body;

    try {
        const user = await User.findOne({email: email});
        if(user){
            return res.json({
                message: "User already Registered with this email",
                error: true,
                success: false
            })
        }

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            email: email,
            password: hashPassword,
            name: name,
            otp: verifyCode,
            otpExpires: Date.now() + 600000
        });
        await newUser.save();

        await sendMail({
            email: email,
            subject: "Verify email from Ecommerce App",
            html: verificationEmail(name, verifyCode)
        })

        const token = jwt.sign(
            { email: newUser.email, id: newUser._id },
            process.env.JSON_WEB_TOKEN_SECRET_KEY
        )

        return res.json({
            message: "User registered successfully! Please verify your email.",
            error: false,
            success: true,
            token: token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
};

// [POST] /api/user/verifyEmail
export async function verifyEmailController(req, res) {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ email: email });
        
        if(!user) {
            return res.status(400).json({
                message: "User not found",
                error: true,
                success: false
            })
        }

        const isCodeValid = user.otp === otp;
        const isNotExpired = user.otpExpires > Date.now();

        if(isCodeValid && isNotExpired) {
            user.verify_email = true;
            user.otp = null;
            user.otpExpires = null;
            await user.save();
            return res.status(200).json({
                message: "Email verified successfully!",
                error: false,
                success: true
            })
        } else if (!isCodeValid) {
            return res.status(400).json({
                message: "Invalid OTP",
                error: true,
                success: false
            })
        } else {
            return res.status(400).json({
                message: "OTP expired",
                error: true,
                success: false
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
};

// [POST] /api/user/login
export async function loginUserController(req, res) {
    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({email, email});
    
        if(!user) {
            return res.status(400).json({
                message: "User not register",
                error: true,
                success: false
            })
        }
    
        if(user.status !== "Active") {
            return res.status(400).json({
                message: "Contact to Admin",
                error: true,
                success: false
            })
        }

        if(user.verify_email !== true) {
            return res.status(400).json({
                message: "Your email is not verify",
                error: true,
                success: false
            })
        }
    
        const checkPassword = await bcryptjs.compare(password, user.password);
    
        if(!checkPassword) {
            return res.status(400).json({
                message: "Check your password",
                error: true,
                success: false
            })
        }
    
        const accessToken = await generatedAccessToken(user._id);
        const refreshToken = await generatedRefreshToken(user._id);
    
        await User.findByIdAndUpdate(user?._id, { last_login_date: new Date() });
    
        const cookiesOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        }
    
        res.cookie("accessToken", accessToken, cookiesOption);
        res.cookie("refreshToken", refreshToken, cookiesOption);
    
        return res.json({
            message: "Login successfully",
            error: false,
            success: true,
            data: {
                accessToken,
                refreshToken
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }

}

// [GET] /api/user/logout
export async function logoutController(req, res) {
    try {
        const userId = req.userId //middleware

        const cookiesOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        }

        res.clearCookie("accessToken", cookiesOption);
        res.clearCookie("refreshToken", cookiesOption);

        await User.findByIdAndUpdate(userId, {
            refresh_token: ""
        })

        return res.json({
            message: "Logout successfully",
            error: false,
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

var imagesArr = []
export async function userAvatarController(req, res) {
    try {
        imagesArr = []

        const userId = req.userId;
        const image = req.files;

        const user = await User.findOne({_id: userId});

        // First remove image from cloudinary
        const imgUrl = req.query.img;

        const urlArr = imgUrl.split("/");
        const avatar_image = urlArr[urlArr.length - 1];
        const imageName = avatar_image.split(".")[0];

        if(imageName) {
            try {
                await cloudinary.uploader.destroy(imageName);

            } catch (error) {
                res.status(500).json({
                    message: error.message || error,
                    error: true,
                    success: false
                })
            }
        }

        if(!user) {
            return res.status(500).json({
                message: "User not found",
                error: true,
                success: false
            })
        }

        const options = {
            user_filename: true,
            unique_filename: false,
            overwrite: false
        }

        for(let i = 0; i < image?.length; i++) {
            const img = await cloudinary.uploader.upload(
                image[i].path,
                options,
                function (error, result) {
                    console.log(result)
                    imagesArr.push(result.secure_url);
                    fs.unlinkSync(`uploads/${req.files[i].filename}`);
                    console.log(req.file[i].filename)
                }
            )
        }

        user.avatar = imagesArr[0];
        await user.save();

        return res.status(200).json({
            _id: userId,
            avatar: imagesArr[0]
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export async function removeImageFromCloudinary(req, res) {
    const imgUrl = req.query.img;

    const urlArr = imgUrl.split("/");

    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];

    if(imageName) {
        try {
            const result = await cloudinary.uploader.destroy(imageName);

            if(result) {
                res.status(200).send(result)
            }
        } catch (error) {
            res.status(500).json({
                message: error.message || error,
                error: true,
                success: false
            })
        }
    }
}

// [PUT] /api/user/:id
export async function updateUserDetails(req, res) {
    try {
        const userId = req.userId;
        const { name, email, mobile, password } = req.body;

        const userExist = await User.findOne({_id: userId});
        if(!userExist) {
            return res.status(400).send('Cannot find this user');
        }

        let verifyCode;

        if(email !== userExist) {
            verifyCode = Math.floor(100000 + Math.random() * 900000).toString;
            await sendMail({
                email: email,
                subject: "Verify email from Ecommerce App",
                html: verificationEmail(name, verifyCode)
            })
        }

        let hashPassword = "";

        if(password) {
            const salt = await bcryptjs.genSalt(10);
            hashPassword = await bcryptjs.hash(password, salt);
        } else {
            hashPassword = userExist.password;
        }

        const userUpdate = await User.findByIdAndUpdate(userId, {
            name: name,
            mobile: mobile,
            email: email,
            verify_email: email !== userExist.email ? false : true,
            password: hashPassword,
            otp: verifyCode !== "" ? verifyCode : null,
            otpExpires: verifyCode !== "" ? Date.now() + 600000 : ""
        }, { new: true })

        return res.json({
            message: "User updated successfully",
            error: false,
            success: true,
            user: userUpdate
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [POST] /api/user/forgot-password
export async function forgotPasswordController(req, res) {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email: email});

        if(!user) {
            return res.status(400).json({
                message: "Email not available",
                error: true,
                success: false
            })
        }

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

        user.otp = verifyCode;
        user.otpExpires = Date.now() + 600000;
        await user.save();

        await sendMail({
            email: email,
            subject: "Check your email",
            html: verificationEmail(user?.name, verifyCode)
        })

    } catch (error) {
        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [POST] /api/user/verify-forgot-password-otp
export async function verifyForgotPasswordOtp (req, res) {
    try {
        const { email, otp } = req.body;

        if(!email || !otp) {
            return res.status(400).json({
                message: "Provide required field email, otp",
                error: true,
                success: false
            })
        }

        const user = User.findOne({email: email});

        if(!user) {
            return res.status(400).json({
                message: "Email not available",
                error: true,
                success: false
            })
        }

        if(otp !== user.otp) {
            return res.status(400).json({
                message: "Invalid",
                error: true,
                success: false
            })
        }

        const currentTime = new Date().toISOString;
        if(user.otpExpires < currentTime) {
            return res.status(400).json({
                message: "Otp is expired",
                error: true,
                success: false
            })
        }

        user.otp = "";
        user.otpExpires = "";
        await user.save();
        
        return res.status(200).json({
            message: "Verify OTP successfully!",
            error: false,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [POST] /api/user/reset-password
export async function resetPassword (req, res) {
    try {
        const { email, newPassword, confirmPassword } = req.body;
        if(!email || !newPassword || !confirmPassword) {
            return res.status(400).json({
                message: "Provide required field email, password",
                error: true,
                success: false
            })
        }

        const user = User.findOne({email: email});
        
        if(!user) {
            return res.status(400).json({
                message: "Email not available",
                error: true,
                success: false
            })
        }

        if(newPassword !== confirmPassword) {
            return res.status(400).json({
                message: "newPassword and confirmPassword must be the same",
                error: true,
                success: false
            })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(newPassword, salt);

        await User.findByIdAndUpdate(user._id, {
            password: hashPassword
        })

        return res.status(200).json({
            message: "Password updated successfully",
            error: false,
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [POST] /api/user/refresh-token
export async function refreshToken(req, res) {
    try {
        const refreshToken = req.cookies.refreshToken || req?.headers?.authorization?.split(" ")[1]

        if(!refreshToken) {
            return res.status(401).json({
                message: "Invalid token",
                error: true,
                success: false
            })
        }

        const verifyToken = jwt.verify(refreshToken, process.env.SECRET_KEY_REFRESH_TOKEN);
        if(!verifyToken) {
            return res.status(401).json({
                message: "Token is expired",
                error: true,
                success: false
            })
        }

        const userId = verifyToken?._id;
        const newAccessToken = await generatedAccessToken(userId);

        const cookiesOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        }

        res.cookie('accessToken', newAccessToken, cookiesOption);

        return res.status(200).json({
            message: "New access Token generated",
            error: false,
            success: true,
            data: {
                accessToken: newAccessToken
            }
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// [GET] /api/user/user-details
export async function userDetails(req, res) {
    try {
        const userId = req.userId;

        const user = await User.findById(userId).select("-password -refresh-token");

        return res.status(200).json({
            message: "user details",
            data: user,
            error: false,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}
