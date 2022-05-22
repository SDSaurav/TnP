var express = require('express');
var router = express.Router();

const {Intern}=require('../models');

router.get('/interns',async(req,res)=>{
    const interns=await Intern.findAll();
    res.json(interns);
})
router.post('/interns',async(req,res)=>{
    const intern=new Intern(req.body);
    await intern.save();
    res.json(intern);
})
router.get('/interns/:id',async(req,res)=>{
    const internId=req.params.id;
    // const intern=await Intern.findByPk(internId);
    const intern=await Intern.findOne({where:{ id: internId}});
    res.json(intern);
})
router.delete('/interns/:id',async(req,res)=>{
    const internId=req.params.id;
    await Intern.destroy({where:{ id: internId}});
    res.json({message:"intern deleted"})
})
router.put('/companies/:id',async(req,res)=>{
    const internId=req.params.id;

    const intern=await Intern.findByPk(internId);

    if(req.body.rollNo){
        intern.rollNo=req.body.rollNo;
    }
    // if(req.body.password){
    //     intern.password=req.body.password;
    // }

    await intern.save();
    res.json(intern);
})
module.exports=router;