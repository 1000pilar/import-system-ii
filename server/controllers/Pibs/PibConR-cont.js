const mdb = require("mdb-parse")
const PibConRUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibConRUpload = PibConRUpload.table('tblPibConR')
const PibConR = require('../../models/PibTables/tblPibConR.js')
const helperQuery = require('../../helpers/QueryPib/conRQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibConRUpload)
        for (var i=0; i<tblPibConRUpload.length; i++){
            console.log(tblPibConRUpload[i])
            var newConR = helperQuery.queryConR(tblPibConRUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibConRUpload[i].CAR+tblPibConRUpload[i].CONTNO
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibConR.findOneAndUpdate(queryCombineKey, newConR, options).then(function(conRData){
                // console.log(conRData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibConR.find((err, conRData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(conRData.length)
                res.send(conRData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibConR.find(carQuery, (err, conRData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(conRData.length)
                res.send(conRData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibConR.remove({}, (err)=>{
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
        PibConR.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}