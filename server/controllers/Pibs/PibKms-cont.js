const mdb = require("mdb-parse")
const PibKmsUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibKmsUpload = PibKmsUpload.table('tblPibKms')
const PibKms = require('../../models/PibTables/tblPibKms')
const helperQuery = require('../../helpers/QueryPib/kmsQuery')

module.exports = {
    create: (req, res)=>{
        console.log(tblPibKmsUpload)
        for (var i=0; i<tblPibKmsUpload.length; i++){
            console.log(tblPibKmsUpload[i])
            var newKms = helperQuery.queryKms(tblPibKmsUpload[i])
            
            var queryCARKms = {
                CAR: tblPibKmsUpload[i].CAR
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibKms.findOneAndUpdate(queryCARKms, newKms, options).then(function(KmsData){
                // console.log(KmsData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibKms.find((err, KmsData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(KmsData.length)
                res.send(KmsData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibKms.find(carQuery, (err, KmsData)=>{
            if(err){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else{
                console.log(KmsData.length)
                res.send(KmsData)
            }
        })
    },
    deleteAll:(req, res)=>{
        PibKms.remove({}, (err)=>{
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
        PibKms.findOneAndDelete(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}