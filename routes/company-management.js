var express = require('express');
var router = express.Router();

const {Company}=require('../models');

router.get('/companies',async(req,res)=>{
    const companies=await Company.findAll();
    res.json(companies);
})
router.post('/companies',async(req,res)=>{
    const company=new Company(req.body);
    await company.save();
    res.json(company);
})
router.get('/companies/:id',async(req,res)=>{
    const companyId=req.params.id;
    // const company=await Company.findByPk(companyId);
    const company=await Company.findOne({where:{ id: companyId}});
    res.json(company);
})
router.delete('/companies/:id',async(req,res)=>{
    const companyId=req.params.id;
    await Company.destroy({where:{ id: companyId}});
    res.json({message:"company deleted"})
})
router.put('/companies/:id',async(req,res)=>{
    const companyId=req.params.id;

    const company=await Company.findByPk(companyId);

    if(req.body.name){
        company.name=req.body.name;
    }
    if(req.body.password){
        company.password=req.body.password;
    }

    await company.save();
    res.json(company);
})
module.exports=router;