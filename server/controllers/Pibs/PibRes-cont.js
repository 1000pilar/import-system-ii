const mdb = require("mdb-parse")
const PibResUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibResUpload = PibResUpload.table('tblPibRes')
const PibRes = require('../../models/PibTables/tblPibRes')
const helperQuery = require('../../helpers/QueryPib/resQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibResUpload)
        for (var i=0; i<tblPibResUpload.length; i++){
            console.log(tblPibResUpload[i])
            var newRes = helperQuery.queryRes(tblPibResUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibResUpload[i].CAR+tblPibResUpload[i].RESKD
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibRes.findOneAndUpdate(queryCombineKey, newRes, options).then(function(ResData){
                // console.log(ResData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibRes.find((err, ResData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(ResData.length)
                res.send(ResData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibRes.find(carQuery, (err, ResData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(ResData.length)
                res.send(ResData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibRes.remove({}, (err)=>{
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
        PibRes.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}