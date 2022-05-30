const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.encryptStr = (str) => {
    return bcrypt.hashSync(str, Number(process.env.PASSWORD_HASH_KEY))
}

exports.signToken = (user) => {
    const token = jwt.sign(
        {id : user.id, email: user.email},
        process.env.JWT_SECRET_KEY,
        // {
        //     expiresIn: "2h"
        // }
    )
    return token;
}

exports.decryptToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded;
}