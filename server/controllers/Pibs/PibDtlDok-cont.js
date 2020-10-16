const mdb = require("mdb-parse")
const PibDtlDokUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibDtlDokUpload = PibDtlDokUpload.table('TblPibDtlDok')
const PibDtlDok = require('../../models/PibTables/tblPibDtlDok')
const helperQuery = require('../../helpers/QueryPib/dtlDokQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibDtlDokUpload)
        for (var i=0; i<tblPibDtlDokUpload.length; i++){
            console.log(tblPibDtlDokUpload[i])
            var newDtlDok = helperQuery.queryDtlDok(tblPibDtlDokUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibDtlDokUpload[i].CAR+tblPibDtlDokUpload[i].Serial
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibDtlDok.findOneAndUpdate(queryCombineKey, newDtlDok, options).then(function(DtlDokData){
                // console.log(DtlDokData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibDtlDok.find((err, DtlDokData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(DtlDokData.length)
                res.send(DtlDokData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibDtlDok.find(carQuery, (err, DtlDokData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(DtlDokData.length)
                res.send(DtlDokData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibDtlDok.remove({}, (err)=>{
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
        PibDtlDok.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}