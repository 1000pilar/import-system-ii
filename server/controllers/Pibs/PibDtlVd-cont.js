const mdb = require("mdb-parse")
const PibDtlVdUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibDtlVdUpload = PibDtlVdUpload.table('tblPibDtlVd')
const PibDtlVd = require('../../models/PibTables/tblPibDtlVd')
const helperQuery = require('../../helpers/QueryPib/dtlVdQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibDtlVdUpload)
        for (var i=0; i<tblPibDtlVdUpload.length; i++){
            console.log(tblPibDtlVdUpload[i])
            var newDtlVd = helperQuery.queryDtlVd(tblPibDtlVdUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibDtlVdUpload[i].CAR+tblPibDtlVdUpload[i].Serial
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibDtlVd.findOneAndUpdate(queryCombineKey, newDtlVd, options).then(function(DtlVdData){
                // console.log(DtlVdData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibDtlVd.find((err, DtlVdData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(DtlVdData.length)
                res.send(DtlVdData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibDtlVd.find(carQuery, (err, DtlVdData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(DtlVdData.length)
                res.send(DtlVdData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibDtlVd.remove({}, (err)=>{
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
        PibDtlVd.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}