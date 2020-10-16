const mdb = require("mdb-parse")
const PibResBillUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibResBillUpload = PibResBillUpload.table('tblPibResBill')
const PibResBill = require('../../models/PibTables/tblPibResBill')
const helperQuery = require('../../helpers/QueryPib/resBillQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibResBillUpload)
        for (var i=0; i<tblPibResBillUpload.length; i++){
            console.log(tblPibResBillUpload[i])
            var newResBill = helperQuery.queryResBill(tblPibResBillUpload[i])
            
            var queryCARResBill = {
                CAR: tblPibResBillUpload[i].CAR
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibResBill.findOneAndUpdate(queryCARResBill, newResBill, options).then(function(ResBillData){
                // console.log(ResBillData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibResBill.find((err, ResBillData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(ResBillData.length)
                res.send(ResBillData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibResBill.find(carQuery, (err, ResBillData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(ResBillData.length)
                res.send(ResBillData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibResBill.remove({}, (err)=>{
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
        PibResBill.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}