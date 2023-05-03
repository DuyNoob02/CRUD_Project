const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller')
router.route('/')
    .get(user.getAllUser)
router.route('/register')
    .post(user.Register)

router.route('/login')
    .post( user.Login)

router.route('/:id')
    .get(user.getUser)
    .put(user.updateUser)
    .delete(user.deleteUser)

module.exports = router;