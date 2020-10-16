const mdb = require("mdb-parse")
const PibDtlUpload = new mdb('./sample database/cbu_4w.mdb')
const tblPibDtlUpload = PibDtlUpload.table('tblPibDtl')
const PibDtl = require('../../models/PibTables/tblPibDtl.js')
const helperQuery = require('../../helpers/QueryPib/dtlQuery')
const logic = require('../../helpers/filterLogics')


//
module.exports = {
    create: (req, res)=>{
        for (var i=0; i<tblPibDtlUpload.length; i++){
            var str = logic.commodityFilter(tblPibDtlUpload[i].NoHs)
            var CAR = tblPibDtlUpload[i].CAR
            var Serial = tblPibDtlUpload[i].Serial
            var strCombineKey = CAR+Serial
            var newDtl = helperQuery.queryDtl(tblPibDtlUpload[i], {Commodity: str.commodity})//CombineKey: strCombineKey, 
            
            var queryCombineKey = {
                CombineKey: strCombineKey
            }
            var options = {upsert: true, new:true, setDefaultsOnInsert:true}

            var newPib = PibDtl.findOneAndUpdate(queryCombineKey, newDtl, options).then(function(dtlData){
                // console.log(dtlData.CombineKey)
            }).catch(()=>{
                console.log("message: Something error with your promise")
            })
        }
        res.send({"message":`data CAR insert succesfull`})
    },  
    getAll:(req, res)=>{
        PibDtl.find((err, dtlData)=>{
            if(err){
                res.send({"message": 'get all data hdr error'})
            } else {
                console.log(dtlData.length)
                res.send(dtlData)
            }
        })
    },
    getOneCAR:(req, res)=>{
        var carQuery = {
            CAR: req.params.CAR
        }
        PibDtl.find(carQuery, (err, dtlData)=>{
            if(err){
                res.send({'message': `There is some error with your request`})
            } else if(dtlData.length == 0){
                res.send({'message': `data hdr pib CAR ${req.params.CAR} not found`})
            } else {
                res.send(dtlData)
                console.log(dtlData.length)    
            }
        })
    },
    // updateAForm_id:(req, res)=>{
    //     var aForm_data = req.data
    //     console.log(aForm_data._id)
    //     var combineKeyQuery = {
    //         CombineKey: aForm_data.CombineKey
    //     }
    //     var AFrom_idSet = {
    //         AFrom_idStatus: true, 
    //         AFrom_id: aForm_data._id
    //     }
    //     PibDtl.updateOne(combineKeyQuery, {$set: AFrom_idSet}, (err)=>{
    //         if(err){
    //             res.send({'message': `There is some error with your request`})
    //         } else {
    //             res.send({'message': `A form Id ${aForm_data.CombineKey} updated`})
    //         }
    //     })
    // },
    deleteAll:(req, res)=>{
        PibDtl.remove({}, (err)=>{
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
        PibDtl.deleteMany(carQuery, (err)=>{
            if(err){
                res.send({"message": `hdr pib ${req.params.CAR} not found`})
            } else{
                res.send({"message": `hdr pib ${req.params.CAR} delete Succesfull`})
            }
        })
    }
}