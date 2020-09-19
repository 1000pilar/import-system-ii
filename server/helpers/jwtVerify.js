const jwt = require('jsonwebtoken')
const Key = require('../../SECRET_THING/key.js')

module.exports = {
  jwtVerifyAdmin: (req, res, next)=>{
    jwt.verify(req.headers.token, Key.jsonSecretKey, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decode.role = 'admin'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see the user`})
          }
      }
    })
  },
  jwtVerifyImport: (req, res, next)=>{
    jwt.verify(req.headers.token, Key.jsonSecretKey, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decode.role = 'import'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see the user`})
          }
      }
    })
  },
  jwtVerifyAccounting: (req, res, next)=>{
    jwt.verify(req.headers.token, Key.jsonSecretKey, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decode.role = 'accounting'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see the user`})
          }
      }
    })
  },
  jwtVerifyVendor: (req, res, next)=>{
    jwt.verify(req.headers.token, Key.jsonSecretKey, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decode.role = 'vendor'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see the user`})
          }
      }
    })
  },
  jwtVerifyHomologation: (req, res, next)=>{
    jwt.verify(req.headers.token, Key.jsonSecretKey, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decode.role = 'homologation'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see the user`})
          }
      }
    })
  },
  jwtVerifyPoliceReg: (req, res, next)=>{
    jwt.verify(req.headers.token, Key.jsonSecretKey, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decode.role = 'police_reg'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see the user`})
          }
      }
    })
  },
  jwtVerifySales: (req, res, next)=>{
    jwt.verify(req.headers.token, Key.jsonSecretKey, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decode.role = 'sales'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see the user`})
          }
      }
    })
  },
  jwtVerifyPurchaser: (req, res, next)=>{
    jwt.verify(req.headers.token, Key.jsonSecretKey, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decode.role = 'purchaser'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see the user`})
          }
      }
    })
  }
}
