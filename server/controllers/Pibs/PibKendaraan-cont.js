const mdb = require("mdb-parse")
const PibKendaraanUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibKendaraanUpload = PibKendaraanUpload.table('tblPibKendaraan')
const PibKendaraan = require('../../models/PibTables/tblPibKendaraan.js')
const helperQuery = require('../../helpers/QueryPib/kendaraanQuery')

module.exports = {
    create: (req, res)=>{
        for (var i=0; i<tblPibKendaraanUpload.length; i++){
            var CAR = tblPibKendaraanUpload[i].CAR
            var Serial = tblPibKendaraanUpload[i].Serial
            var strCombineKey = CAR+Serial
            var newKendaraan = helperQuery.queryKendaraan(tblPibKendaraanUpload[i])//CombineKey: strCombineKey, 
            
            var queryCombineKey = {
                CombineKey: strCombineKey
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibKendaraan.findOneAndUpdate(queryCombineKey, newKendaraan, options).then(function(kendaraanData){
                // console.log(kendaraanData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibKendaraan.find((err, kendaraanData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(kendaraanData.length)
                res.send(kendaraanData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibKendaraan.find(carQuery, (err, kendaraanData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(kendaraanData.length)
                res.send(kendaraanData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibKendaraan.remove({}, (err)=>{
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
        PibKendaraan.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}