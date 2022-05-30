const {User} = require("../models");

exports.createUser = async (data) => {
    const user = new User(data);
    await user.save();
    return user;
}

exports.retrieveAllUsers = async () => {
    const users=await User.findAll();
    return users;
}

exports.retrieveUserByEmail = async (email) => {
    const user = await User.findOne({ where : { email }});
    return user;
}

exports.retrieveUserById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}

exports.updateUserWithData = async (user, data) => {
    if(data.name){
        user.name=data.name;
    }
    if(data.password){
        user.password=data.password;
    }
    return await user.save();
}

exports.deleteUserById = async (userId) => {
    const user = await User.destroy({where:{id:userId} });
    return user;
}