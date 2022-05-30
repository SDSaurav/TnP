const bcrypt =  require('bcryptjs');

const userHelper = require('../helpers/users');
const {createUser, retrieveUserByEmail} = require("../helpers/users");
const {encryptStr, signToken} = require("../utils/auth");

exports.registerUser = async (req, res) => {
    try{
        if(req.body.email && req.body.name && req.body.password){
            const data = {
                name: req.body.name,
                email: req.body.email,
               // mobile: req.body.mobile,
                age: req.body.age,
                password: encryptStr(req.body.password),
            }
            const user = await userHelper.createUser(data);

            user.token = signToken(user)
            user.save(); // no wait required

            res.json(user);
        } else {
            res.status(400).json({
                error: "Invalid input"
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}


exports.login = async (req, res) => {
    try{
        if(req.body.email && req.body.password){
            const user = await retrieveUserByEmail(req.body.email);
            if(user && bcrypt.compare(user.password, req.body.password)){
                user.token = signToken(user)
                user.save(); // no wait required
                res.json(user)
            } else {
                res.status(400).json({
                    error: "Invalid credentials"
                })
            }
        } else {
            res.status(400).json({
                error: "Invalid input"
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}