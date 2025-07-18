import { Router } from 'express';
const userRouter = Router();

import { forgotPasswordController, loginUserController, logoutController, refreshToken, registerUserController, removeImageFromCloudinary, resetPassword, updateUserDetails, userAvatarController, userDetails, verifyEmailController, verifyForgotPasswordOtp } from '../controllers/user.controller.js';
import { auth } from '../middlewares/auth.middleware.js';
import upload from '../../../helpers/storageMulter.js';



userRouter.post("/register", registerUserController);

userRouter.post("/verifyEmail", verifyEmailController);

userRouter.post("/login", loginUserController);

userRouter.get("/logout", auth, logoutController);

userRouter.put("/user-avatar", upload.array('avatar'), userAvatarController);

userRouter.delete("/deleteImage", auth, removeImageFromCloudinary);

userRouter.put("/:id", auth, updateUserDetails);

userRouter.post("/forgot-password", forgotPasswordController);

userRouter.post("/verify-forgot-password-otp", verifyForgotPasswordOtp);

userRouter.post("/reset-password", resetPassword);

userRouter.post("/refresh-token", refreshToken);

userRouter.get("/user-details", auth, userDetails);

export default userRouter;