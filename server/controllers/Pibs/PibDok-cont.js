const mdb = require("mdb-parse")
const PibDokUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibDokUpload = PibDokUpload.table('tblPibDok')
const PibDok = require('../../models/PibTables/tblPibDok')
const helperQuery = require('../../helpers/QueryPib/dokQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibDokUpload)
        for (var i=0; i<tblPibDokUpload.length; i++){
            console.log(tblPibDokUpload[i])
            var newDok = helperQuery.queryDok(tblPibDokUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibDokUpload[i].CAR+tblPibDokUpload[i].DokKd
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibDok.findOneAndUpdate(queryCombineKey, newDok, options).then(function(DokData){
                // console.log(DokData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibDok.find((err, DokData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(DokData.length)
                res.send(DokData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibDok.find(carQuery, (err, DokData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(DokData.length)
                res.send(DokData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibDok.remove({}, (err)=>{
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
        PibDok.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}