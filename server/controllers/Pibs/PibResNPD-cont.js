const mdb = require("mdb-parse")
const PibResNPDUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibResNPDUpload = PibResNPDUpload.table('tblPibResNPD')
const PibResNPD = require('../../models/PibTables/tblPibResNPD')
const helperQuery = require('../../helpers/QueryPib/resNPDQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibResNPDUpload)
        for (var i=0; i<tblPibResNPDUpload.length; i++){
            console.log(tblPibResNPDUpload[i])
            var newResNPD = helperQuery.queryResNPD(tblPibResNPDUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibResNPDUpload[i].CAR+tblPibResNPDUpload[i].Serial
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibResNPD.findOneAndUpdate(queryCombineKey, newResNPD, options).then(function(ResNPDData){
                // console.log(ResNPDData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibResNPD.find((err, ResNPDData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(ResNPDData.length)
                res.send(ResNPDData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibResNPD.find(carQuery, (err, ResNPDData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(ResNPDData.length)
                res.send(ResNPDData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibResNPD.remove({}, (err)=>{
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
        PibResNPD.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}