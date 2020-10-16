const mdb = require("mdb-parse")
const PibConUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibConUpload = PibConUpload.table('tblPibCon')
const PibCon = require('../../models/PibTables/tblPibCon.js')
const helperQuery = require('../../helpers/QueryPib/conQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibConUpload)
        for (var i=0; i<tblPibConUpload.length; i++){
            console.log(tblPibConUpload[i])
            var newCon = helperQuery.queryCon(tblPibConUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibConUpload[i].CAR+tblPibConUpload[i].ContNo
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibCon.findOneAndUpdate(queryCombineKey, newCon, options).then(function(conData){
                // console.log(conData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibCon.find((err, conData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(conData.length)
                res.send(conData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibCon.find(carQuery, (err, conData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(conData.length)
                res.send(conData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibCon.remove({}, (err)=>{
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
        PibCon.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}