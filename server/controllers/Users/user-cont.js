const User = require('../../models/UserTables/tblUser.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Key = require('../../../SECRET_THING/key.js')
const KeyforJson = Key.jsonSecretKey //remember string must be store in the variable

module.exports = {
    signUp: (req, res)=>{
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
                res.send({errmsg:'username exist'})
            }
        })
    },
    signIn : (req, res)=>{
        var user = req.user
        // console.log(`aku sampai disini`);
        if(user.hasOwnProperty('message')) {
          res.send(user)
        } else {
          var token = jwt.sign({
            name: user.name,
            id: user._id,
            role: user.role
          },
          KeyforJson,
          { expiresIn: '1h'
          }, (err, token)=>{
            if (!err){
              jwt.verify(token, KeyforJson, (err, decoded)=>{
                if(!err) {
                //   console.log(`aku sampai didalam`);
                  res.send({token: token, name:decoded.name, role: decoded.role, id:decoded.id})
                } else {
                //   console.log(`ada yang ga beres sama tokennya`);
                }
              })
            } else {
              res.send(err)
            }
          })
        }
    },
    getOneUser : (req, res)=>{
        User.findOne({username: req.params.username}, (err, user)=>{
            if(err){
                res.send({errmsg:'username not found'})
            } else{
                res.send(user)
            }
        })
    },
    getAllUser : (req, res)=>{
        User.find((err, users)=>{
            if(!err) {
              res.send(users)
            } else {
              res.send({errmsg:'username not found'})
            }
          })
    },
    updateUser : (req, res)=>{
        User.findOneAndUpdate({username:req.params.username}, {$set:{username:req.body.username, password: bcrypt.hashSync(req.body.password, 10), role:req.body.role, }}).exec((err, user)=>{
            if(err){
                res.send({errmsg:'update user failed'})
            } else {
                res.send({successmsg:`username ${user.username} updated`})
            }
        })
    },
    deleteOneUser : (req, res)=>{
        User.findOneAndRemove({username:req.params.username}, (err, user)=>{
            if(err){
                res.send({errmsg:'username not found'})
            } else {
                res.send({successmsg:`username ${user.username} removed`})
            }
        })
    },
    deleteAllUser : (req, res)=>{
        User.remove({}, (err)=>{
            if(!err){
                res.send({errmsg:'All user deleted'})
            } else{
                res.send({errmsg:'Error during delete'})
            }
        })
    }
}
