export async function register(req, res, next) {
    if(!req.body.email){
        return res.status(400).json({
            message: "Provide email",
            error: true,
            success: false
        })
    }

    if(!req.body.name){
        return res.status(400).json({
            message: "Provide name",
            error: true,
            success: false
        })
    }

    if(!req.body.password){
        return res.status(400).json({
            message: "Provide password",
            error: true,
            success: false
        })
    }

    next();
}