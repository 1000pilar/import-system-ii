const mdb = require("mdb-parse")
const PibNptUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibNptUpload = PibNptUpload.table('tblPibNpt')
const PibNpt = require('../../models/PibTables/tblPibNpt')
const helperQuery = require('../../helpers/QueryPib/nptQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibNptUpload)
        for (var i=0; i<tblPibNptUpload.length; i++){
            console.log(tblPibNptUpload[i])
            var newNpt = helperQuery.queryNpt(tblPibNptUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibNptUpload[i].CAR+tblPibNptUpload[i].Serial
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibNpt.findOneAndUpdate(queryCombineKey, newNpt, options).then(function(NptData){
                // console.log(NptData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibNpt.find((err, NptData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(NptData.length)
                res.send(NptData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibNpt.find(carQuery, (err, NptData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(NptData.length)
                res.send(NptData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibNpt.remove({}, (err)=>{
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
        PibNpt.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}