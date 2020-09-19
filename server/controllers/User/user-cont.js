const User = require('../models/UserTables/tblUser.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


module.exports = {
    signUp : (req, res)=>{
        var createUser = new User({
        name: req.body.name,
        username: req.body.username,
        role: req.body.role,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        phone: req.body.phone,
        company: req.body.company,
        department: req.body.department,
        userstatus: req.body.status || 'active'
        })
        createUser.save((err, user)=>{
            if(!err){
                res.send(user)
            } else {
                res.send({errmsg:'user already taken'})
            }
        })
    },
    signIn : '',
    getOneUser : '',
    getAllUser : '',
    updateUser : '',
    deleteOneUser : '',
    deleteAllUser : ''
}
