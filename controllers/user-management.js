const {createUser, retrieveUserById, deleteUserById, retrieveAllUsers, updateUserWithData} = require("../helpers/users");

exports.createNewUser = async (req, res) => {
    try{
        if(req.body.email && req.body.name && req.body.password){
            const user = await createUser(req.body);
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

exports.retrieveUser = async (req, res) => {
    try{
        if(req.params.id){
            const user = await retrieveUserById(req.params.id);
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

exports.updateUser = async (req, res) => {
    try{
        if(req.params.id){
            const user = await retrieveUserById(req.params.id);
            const updatedUser = await updateUserWithData(user, req.body)
            res.json(updatedUser);
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

exports.retrieveAllUsers = async (req, res) => {
    try{
        const user = await retrieveAllUsers();
        res.json(user);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}


exports.deleteUser = async (req, res) => {
    try{
        if(req.params.id){
            await deleteUserById(req.params.id);
            res.json({message:"User deleted"});
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