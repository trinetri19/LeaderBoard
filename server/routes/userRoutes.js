const express = require('express');
const router = express.Router()
const { getUsers, addUser } = require('../controllers/userController');

router.route('/user').get(getUsers).post(addUser)

module.exports = router
