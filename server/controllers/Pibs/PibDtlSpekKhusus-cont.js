const mdb = require("mdb-parse")
const PibDtlSpekKhususUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibDtlSpekKhususUpload = PibDtlSpekKhususUpload.table('TblPibDtlSpekKhusus')
const PibDtlSpekKhusus = require('../../models/PibTables/tblPibDtlSpekKhusus')
const helperQuery = require('../../helpers/QueryPib/dtlSpekKhususQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibDtlSpekKhususUpload)
        for (var i=0; i<tblPibDtlSpekKhususUpload.length; i++){
            console.log(tblPibDtlSpekKhususUpload[i])
            var newDtlSpekKhusus = helperQuery.queryDtlSpekKhusus(tblPibDtlSpekKhususUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibDtlSpekKhususUpload[i].CAR+tblPibDtlSpekKhususUpload[i].Serial
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibDtlSpekKhusus.findOneAndUpdate(queryCombineKey, newDtlSpekKhusus, options).then(function(DtlSpekKhususData){
                // console.log(DtlSpekKhususData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibDtlSpekKhusus.find((err, DtlSpekKhususData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(DtlSpekKhususData.length)
                res.send(DtlSpekKhususData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibDtlSpekKhusus.find(carQuery, (err, DtlSpekKhususData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(DtlSpekKhususData.length)
                res.send(DtlSpekKhususData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibDtlSpekKhusus.remove({}, (err)=>{
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
        PibDtlSpekKhusus.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}