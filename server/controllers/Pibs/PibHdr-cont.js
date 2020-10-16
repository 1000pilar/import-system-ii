const mdb = require("mdb-parse")
const PibHdrUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibHdrUpload = PibHdrUpload.table('tblPibHdr')
const PibHdr = require('../../models/PibTables/tblPibHdr.js')
const PibDtl = require('../../models/PibTables/tblPibDtl')
const helperQuery = require('../../helpers/QueryPib/hdrQuery')

module.exports = {
    create: (req, res)=>{
        var InsertCAR = []
        for (var i=0; i<tblPibHdrUpload.length; i++){
            var newHdr = helperQuery.queryHdr(tblPibHdrUpload[i], {UserHistory:req.body.username})

            var queryCARHdr = {
                CAR: tblPibHdrUpload[i].CAR
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibHdr.findOneAndUpdate(queryCARHdr, newHdr, options, (err, HdrData)=>{
            if(!err){
              console.log(`data CAR ${HdrData.CAR} insert succesfull`)
              var setPibNo = {
                PibNo: HdrData.PibNo,
                PibTg: HdrData.PibTg
              }
              PibDtl.updateMany({CAR: HdrData.CAR}, {$set: setPibNo}, (err, data)=>{
                  if (err){
                      res.send({"message": "There is some error when update Pib Number to Tbl Detail"})
                  } else {
                      console.log(`detail data updated succesfull`)
                  }
              })
              // res.send({"message": `data CAR ${HdrData.CAR} insert succesfull`})
            } else {
              console.log(`data CAR ${tblPibHdrUpload[i].CAR} Already Exist`)
            //   res.send({"message": `data CAR error`})
            }
          })
          var allInserted = tblPibHdrUpload[i].CAR
          InsertCAR.push(allInserted)
        }
        res.send({"CARS Inserted": InsertCAR})   
    },
    getAll:(req, res)=>{
        PibHdr.find((err, hdrData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(hdrData.length)
                res.send(hdrData)
            }
        })
    },
    getOne:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibHdr.findOne(carQuery, (err, hdrData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                res.send(hdrData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibHdr.remove({}, (err)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else{
                res.send({"message": 'all data deleted'})
            }
        })
    },
    deleteOne:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibHdr.findOneAndRemove(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}