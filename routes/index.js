var express = require('express');
var router = express.Router();
const UserManagement=require('./user-management');
const CompanyManagement=require('./company-management');
const {User} = require('../models');
const {Company} = require('../models');

router.use('/v1/user-management',UserManagement);
router.use('/v1/company-management',CompanyManagement);

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

router.get('/test', async (req, res, next) => {

  const comapany= await new User({
    name: "company",
    email: "company@gmail.com",
    password: "password"
  })
  console.log(company)

  const companyObject = await company.save();

  console.log(companyObject);

  res.send("Hello World.")
})

module.exports = router;