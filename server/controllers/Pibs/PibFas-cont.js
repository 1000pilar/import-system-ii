const mdb = require("mdb-parse")
const PibFasUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibFasUpload = PibFasUpload.table('tblPibFas')
const PibFas = require('../../models/PibTables/tblPibFas')
const helperQuery = require('../../helpers/QueryPib/fasQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibFasUpload)
        for (var i=0; i<tblPibFasUpload.length; i++){
            console.log(tblPibFasUpload[i])
            var newFas = helperQuery.queryFas(tblPibFasUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibFasUpload[i].CAR+tblPibFasUpload[i].Serial
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibFas.findOneAndUpdate(queryCombineKey, newFas, options).then(function(FasData){
                // console.log(FasData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibFas.find((err, FasData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(FasData.length)
                res.send(FasData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibFas.find(carQuery, (err, FasData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(FasData.length)
                res.send(FasData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibFas.remove({}, (err)=>{
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
        PibFas.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}