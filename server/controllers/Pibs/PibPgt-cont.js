const mdb = require("mdb-parse")
const PibPgtUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibPgtUpload = PibPgtUpload.table('tblPibPgt')
const PibPgt = require('../../models/PibTables/tblPibPgt')
const helperQuery = require('../../helpers/QueryPib/pgtQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibPgtUpload)
        for (var i=0; i<tblPibPgtUpload.length; i++){
            console.log(tblPibPgtUpload[i])
            var newPgt = helperQuery.queryPgt(tblPibPgtUpload[i])
            
            var queryCombineKey = {
                CombineKey: tblPibPgtUpload[i].CAR+tblPibPgtUpload[i].Serial
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibPgt.findOneAndUpdate(queryCombineKey, newPgt, options).then(function(PgtData){
                // console.log(PgtData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibPgt.find((err, PgtData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(PgtData.length)
                res.send(PgtData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibPgt.find(carQuery, (err, PgtData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(PgtData.length)
                res.send(PgtData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibPgt.remove({}, (err)=>{
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
        PibPgt.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}