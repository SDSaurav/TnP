const express = require('express');
const router = express.Router();

//const {authenticate} = require("../utils/middlewares");
const {createNewOrganization, retrieveOrganization, deleteOrganization, retrieveAllOrganizations, updateOrganization} = require("../controllers/organization-management");

// router.get('/organization', authenticate, retrieveAllOrganizations)
// router.post('/organization', authenticate, createNewOrganization)

// router.route('/organization')
//     .get(authenticate, retrieveAllOrganizations)
//     .post(authenticate, createNewOrganization);

router.route('/organization')
    .get( retrieveAllOrganizations)
    .post( createNewOrganization);

// router.get('/organization/:id', authenticate, retrieveOrganization)
// router.delete('/organization/:id', authenticate, deleteOrganization)
// router.put('/organization/:id', authenticate, updateOrganization)


router.route('/organization/:id')
    .get( retrieveOrganization)
    .delete( deleteOrganization)
    .put( updateOrganization);


module.exports = router;