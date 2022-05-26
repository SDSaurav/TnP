var express = require('express');
var router = express.Router();

const {User}=require('../models');
router.get('/users',async(req,res)=>{
    const users=await User.findAll();
    res.json(users);
})
router.post('/users',async(req,res)=>{
    const user=new User(req.body);
    await user.save();
    res.json(user);
})
router.get('/users/:id',async(req,res)=>{
    const userId=req.params.id;
    // const user=await User.findByPk(userId);
    const user=await User.findOne({where:{ id: userId}});
    res.json(user);
})
router.delete('/users/:id',async(req,res)=>{
    const userId=req.params.id;
    await User.destroy({where:{ id: userId}});
    res.json({message:"user deleted"})
})
router.put('/users/:id',async(req,res)=>{
    const userId=req.params.id;

    const user=await User.findByPk(userId);

    if(req.body.name){
        user.name=req.body.name;
    }
    if(req.body.password){
        user.password=req.body.password;
    }

    await user.save();
    res.json(user);
})
module.exports=router;
