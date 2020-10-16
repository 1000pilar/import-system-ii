const mdb = require("mdb-parse")
const PibResNPBLUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibResNPBLUpload = PibResNPBLUpload.table('TblPibResNPBL')
const PibResNPBL = require('../../models/PibTables/tblPibResNPBL')
const helperQuery = require('../../helpers/QueryPib/resNPBLQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibResNPBLUpload)
        for (var i=0; i<tblPibResNPBLUpload.length; i++){
            console.log(tblPibResNPBLUpload[i])
            var newResNPBL = helperQuery.queryResNPBL(tblPibResNPBLUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibResNPBLUpload[i].CAR+tblPibResNPBLUpload[i].Serial
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibResNPBL.findOneAndUpdate(queryCombineKey, newResNPBL, options).then(function(ResNPBLData){
                // console.log(ResNPBLData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibResNPBL.find((err, ResNPBLData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(ResNPBLData.length)
                res.send(ResNPBLData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibResNPBL.find(carQuery, (err, ResNPBLData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(ResNPBLData.length)
                res.send(ResNPBLData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibResNPBL.remove({}, (err)=>{
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
        PibResNPBL.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}