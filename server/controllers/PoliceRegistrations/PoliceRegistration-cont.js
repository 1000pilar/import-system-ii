const AformDataList = require('../../../sample database/formAPib373446.json')
const helperQuery = require('../../helpers/QueryPoliceRegistration/aformQuery')
const AForm = require('../../models/PoliceRegistrationTables/tblAForm')
const updateObjectId = require('../../helpers/updateObjectId')



module.exports = {
    insert: (req, res)=>{
        var aForms = AformDataList.data
        for (var i=0; i < aForms.length; i++) {
            
            var newAFormData = helperQuery.aFormQuery(aForms[i])
            var queryFilter ={
                CombineKey: aForms[i].car+aForms[i].seriBrg
            }
            var options = {
                upsert: true,
                new: true,
                setDefaultsOnInsert:true
            }
            var newAForm = AForm.findOneAndUpdate(queryFilter, newAFormData, options).then((err, data)=>{
                // console.log(data)
            }).catch((err)=>{
                res.send({'message': 'there is error in Async Process'})
            })

        }
        updateObjectId.FormAId(aForms)
        console.log('All data A Forms JSON Uploaded Succesfull')
    },
    getAll: (req, res)=>{
        AForm.find({}, (err, data)=>{
            if(err){
                res.send(err)
            }else{
                console.log(data.length)
                res.send(data)
            }
        })
    },
    deleteAll: (req, res)=>{
        AForm.deleteMany({},(err)=>{
            if(err){
                res.send(err)
            } else{
                res.send({'massage': 'All form A data deleted'})
            }
        })
    }
}