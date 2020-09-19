const express = require('express');
const router = express.Router();
const userController =('../controllers/user-cont.js');
const passport = require('passport');
const helper = require('../helpers/jwtVerify.js')

router.post('/signup', helper.jwtVerifyAdmin, userController.signup)
router.post('/signin', helper.jwtVerifyAdmin, userController.signin)
router.get('/getone', helper.jwtVerifyAdmin, userController.getOneUser)
router.get('/getall', helper.jwtVerifyAdmin, userController.getAllUser)
router.put('/update', helper.jwtVerifyAdmin, userController.updateUser)
router.delete('/deleteone', helper.jwtVerifyAdmin, userController.deleteOneUser)
router.delete('/deleteall', helper.jwtVerifyAdmin, userController.deleteAllUser)


module.exports = router