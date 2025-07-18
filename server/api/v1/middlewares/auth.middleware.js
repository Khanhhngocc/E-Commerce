import jwt from 'jsonwebtoken';

export async function auth (req, res, next) {
    try {
        const token = req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];

        if(!token) {
            return res.status(400).json({
                message: "Provide token",
                error: true,
                success: false
            })
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

        if(!decode) {
            return res.status(401).json({
                message: "Unauthorized access",
                error: true,
                success: false
            })
        }

        req.userId = decode.id;

        next();
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "You have not Login",
            error: true,
            success: false
        })
    }
};
