const mdb = require('mdb-parse')
const tblPibTrf = new mdb('./sample database/cbu_4w.mdb')
const tblPibTrfUpload = tblPibTrf.table('tblPibTrf')
const PibTrf = require('../../models/PibTables/tblPibTrf')
const helperQuery = require('../../helpers/QueryPib/trfQuery')


module.exports = {
    create: (req, res)=>{
        console.log(tblPibTrfUpload)
        for (var i=0; i<tblPibTrfUpload.length; i++){
            console.log(tblPibTrfUpload[i])
            var newTrf = helperQuery.queryTrf(tblPibTrfUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibTrfUpload[i].CAR+tblPibTrfUpload[i].SeriTrp
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibTrf.findOneAndUpdate(queryCombineKey, newTrf, options).then(function(TrfData){
                // console.log(TrfData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibTrf.find((err, TrfData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(TrfData.length)
                res.send(TrfData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibTrf.find(carQuery, (err, TrfData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(TrfData.length)
                res.send(TrfData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibTrf.remove({}, (err)=>{
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
        PibTrf.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}