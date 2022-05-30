const express = require('express');
const router = express.Router();

const {authenticate} = require("../utils/middlewares");
const {createNewUser, retrieveUser, deleteUser, retrieveAllUsers, updateUser} = require("../controllers/user-management");

// router.get('/users', authenticate, retrieveAllUsers)
// router.post('/users', authenticate, createNewUser)

router.route('/users')
    .get(authenticate, retrieveAllUsers)
    .post(authenticate, createNewUser);

// router.get('/users/:id', authenticate, retrieveUser)
// router.delete('/users/:id', authenticate, deleteUser)
// router.put('/users/:id', authenticate, updateUser)

router.route('/users/:id')
    .get(authenticate, retrieveUser)
    .delete(authenticate, deleteUser)
    .put(authenticate, updateUser);


module.exports = router;