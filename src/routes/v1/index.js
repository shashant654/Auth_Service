const express = require('express')
const UserController = require('../../controllers/user-controller')

const router = express.Router()

router.post('/signUp', UserController.create);
router.post('/signIn', UserController.signIn)

module.exports = router