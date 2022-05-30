const express = require('express');
const router = express.Router();

//const {authenticate} = require("../utils/middlewares");
const {createNewCompany, retrieveCompany, deleteCompany, retrieveAllCompanies, updateCompany} = require("../controllers/Company-management");

// router.get('/companies', authenticate, retrieveAllCompanies)
// router.post('/companies', authenticate, createNewCompany)

// router.route('/companies')
//     .get(authenticate, retrieveAllCompanies)
//     .post(authenticate, createNewCompany);

router.route('/companies')
    .get( retrieveAllCompanies)
    .post( createNewCompany);

// router.get('/companies/:id', authenticate, retrieveCompany)
// router.delete('/companies/:id', authenticate, deleteCompany)
// router.put('/companies/:id', authenticate, updateCompany)

// router.route('/companies/:id')
//     .get(authenticate, retrieveCompany)
//     .delete(authenticate, deleteCompany)
//     .put(authenticate, updateCompany);

router.route('/companies/:id')
    .get( retrieveCompany)
    .delete( deleteCompany)
    .put( updateCompany);

module.exports = router;