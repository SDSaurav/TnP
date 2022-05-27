const {decryptToken} = require("./auth");
const {User} = require("../models");

exports.authenticate = (req, res, next) => {
    const token = req.headers[process.env.AUTH_TOKEN_HEADER];
    if(!token){
        return res.status(403).send("Unauthorised Access");
    }

    try{
        const decoded = decryptToken(token);
        const user = User.findByPk(decoded.id);
        if(user){
            req.user = user;
            next();
        } else {
            return res.status(403).send("Unauthorised Access");
        }
    }catch (e){
        console.log(err.message)
        res.status(500).json({
            error: "Internal Server Error",
        })
    }
}