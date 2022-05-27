const express = require('express');
const router = express.Router();

// const {authenticate} = require("../utils/middlewares");
const {createNewIntern, retrieveIntern, deleteIntern, retrieveAllInterns, updateIntern} = require("../controllers/intern-management");

// router.get('/interns', authenticate, retrieveAllInterns)
// router.post('/interns', authenticate, createNewIntern)

// router.route('/interns')
//     .get( authenticate,retrieveAllInterns)
//     .post( authenticate,createNewIntern);

router.route('/interns')
    .get( retrieveAllInterns)
    .post( createNewIntern);



// router.get('/interns/:id', authenticate, retrieveIntern)
// router.delete('/interns/:id', authenticate, deleteIntern)
// router.put('/interns/:id', authenticate, updateIntern)

// router.route('/interns/:id')
//     .get(authenticate, retrieveIntern)
//     .delete(authenticate, deleteIntern)
//     .put(authenticate, updateIntern);

router.route('/interns/:id')
    .get( retrieveIntern)
    .delete( deleteIntern)
    .put( updateIntern);

module.exports = router;