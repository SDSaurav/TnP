var express = require('express');
var router = express.Router();

const {Organization}=require('../models');

router.get('/organizations',async(req,res)=>{
    const organizations=await Organization.findAll();
    res.json(organizations);
})
router.post('/organizations',async(req,res)=>{
    const organization=new Organization(req.body);
    await organization.save();
    res.json(organization);
})
router.get('/organizations/:id',async(req,res)=>{
    const organizationId=req.params.id;
    // const organization=await Organization.findByPk(organizationlId);
    const organization=await Organization.findOne({where:{ id: organizationId}});
    res.json(organization);
})
router.delete('/organizations/:id',async(req,res)=>{
    const organizationId=req.params.id;
    await Organization.destroy({where:{ id: organizationId}});
    res.json({message:"organization deleted"})
})
router.put('/organizations/:id',async(req,res)=>{
    const organizationId=req.params.id;

    const organization=await Organization.findByPk(organizationId);

    if(req.body.name){
        organization.name=req.body.name;
    }
    // if(req.body.password){
    //     organization.password=req.body.password;
    // }

    await organization.save();
    res.json(organization);
})
module.exports=router;