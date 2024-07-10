const express = require('express')
const UserController = require('../../controllers/user-controller')
const {AuthRequestValidators} = require('../../middlewares/index');

const router = express.Router()

router.post('/signUp',AuthRequestValidators.validateUserAuth, UserController.create);
router.post('/signIn',AuthRequestValidators.validateUserAuth, UserController.signIn);

router.get('/isAuthenticated', UserController.isAuthenticated)

router.get('/dummy', (req, res) => {
          return res.status(200).json({message: 'OK'})
})

module.exports = router