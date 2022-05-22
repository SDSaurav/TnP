var express = require('express');
var router = express.Router();
const UserManagement=require('./user-management');
const CompanyManagement=require('./company-management');
const InternManagement=require('./intern-management');
const OrganizationManagement=require('./organization-management');
const {User} = require('../models');
const {Company} = require('../models');
const {Intern} = require('../models');
const {Organization} = require('../models');

router.use('/v1/user-management',UserManagement);
router.use('/v1/company-management',CompanyManagement);
router.use('/v1/intern-management',InternManagement);
router.use('/v1/organization-management',OrganizationManagement);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// req incomming connection data
// res data to give back
// next middlewares
router.get('/test', async (req, res, next) => {

  const user = await new User({
    name: "Test",
    email: "test@gmail.com",
    password: "password"
  })
  console.log(user)

  const userObject = await user.save();

  console.log(userObject);

  res.send("Hello World.")
})

router.get('/test1', async (req, res, next) => {

  const comapany= await new Company({
    name: "company",
    phNumber:123456,
    email: "company@gmail.com",
    designation:"Manager",
    password: "password"
  })
  console.log(company)

  const companyObject = await company.save();

  console.log(companyObject);

  res.send("Hello World.")
})

// router.get('/test2', async (req, res, next) => {
//
//   const organization= await new Organization({
//     rollNo: 23,
//     companyD: 13457,
//     location: rampur,
//     startD:35467 ,
//     endD:45576 ,
//     duration:465 ,
//   })
//   console.log(organization)
//
//   const organizationObject = await organization.save();
//
//   console.log(organizationObject);
//
//   res.send("Hello World.")
// })

module.exports = router;