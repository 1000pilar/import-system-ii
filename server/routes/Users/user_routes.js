const express = require('express');
const router = express.Router();
const userController =('../controllers/user-cont.js');
const passport = require('passport');
const helper = require('../helpers/jwtVerify.js')



module.exports = router