const jwt = require('jsonwebtoken')
const Key = require('../../SECRET_THING/key.js')
const KeyforJson = Key.jsonSecretKey

module.exports = {
  jwtVerifyAdmin: (req, res, next)=>{
    jwt.verify(req.headers.token, KeyforJson, (err, decoded)=>{
      // console.log(decoded)
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decoded.role == 'admin'){
            // console.log(decoded.role)
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see the user`})
          }
      }
    })
  },
  jwtVerifyImport: (req, res, next)=>{
    jwt.verify(req.headers.token, KeyforJson, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decoded.role == 'import'){
            console.log("import role")
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see Import Data`})
          }
      }
    })
  },
  jwtVerifyAccounting: (req, res, next)=>{
    jwt.verify(req.headers.token, KeyforJson, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decoded.role == 'accounting'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see Accounting Data`})
          }
      }
    })
  },
  jwtVerifyVendor: (req, res, next)=>{
    jwt.verify(req.headers.token, KeyforJson, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decoded.role == 'vendor'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see vendor data`})
          }
      }
    })
  },
  jwtVerifyHomologation: (req, res, next)=>{
    jwt.verify(req.headers.token, KeyforJson, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decoded.role == 'homologation'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see homologation data`})
          }
      }
    })
  },
  jwtVerifyPoliceReg: (req, res, next)=>{
    jwt.verify(req.headers.token, KeyforJson, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decoded.role == 'police_reg'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see police registration data`})
          }
      }
    })
  },
  jwtVerifySales: (req, res, next)=>{
    jwt.verify(req.headers.token, KeyforJson, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decoded.role == 'sales'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see the sales data`})
          }
      }
    })
  },
  jwtVerifyPurchaser: (req, res, next)=>{
    jwt.verify(req.headers.token, KeyforJson, (err, decoded)=>{
      if(err) {
        res.send({message: `There is some error with your token`})
      } else {
          if(decoded.role == 'purchaser'){
            req.decoded = decoded
            next()
          } else{
            res.send({message: `You don't have permission to see Order data`})
          }
      }
    })
  }
}
