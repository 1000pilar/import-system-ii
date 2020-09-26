const express = require('express');
const router = express.Router();
const userController = require('../../controllers/Users/user-cont.js');
const passport = require('passport');
const helper = require('../../helpers/jwtVerify.js')

router.post('/signup', userController.signUp)
router.post('/signin', passport.authenticate('local', {session: false}), userController.signIn)
router.get('/getone/:username', helper.jwtVerifyAdmin, userController.getOneUser)
router.get('/getall', helper.jwtVerifyAdmin, userController.getAllUser)
router.put('/update/:username', helper.jwtVerifyAdmin, userController.updateUser)
router.delete('/deleteone/:username', userController.deleteOneUser)
router.delete('/deleteall', userController.deleteAllUser)


module.exports = router