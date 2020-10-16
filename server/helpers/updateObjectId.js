const PibDtl = require('../models/PibTables/tblPibDtl')
const AForm = require('../models/PoliceRegistrationTables/tblAForm')


module.exports ={
    FormAId: (aForms)=>{
        for (var i=0; i < aForms.length; i++) {
            var queryFilter ={
                CombineKey: aForms[i].car+aForms[i].seriBrg
            }
            var update_idAForm_toPibDtl = AForm.findOne(queryFilter, (err, aForm_data)=>{
                if(err){
                    console.log('error when try to findOne and update detail')
                } else{
                    // console.log(aForm_data._id)
                    var combineKeyQuery = {
                        CombineKey: aForm_data.CombineKey
                    }
                    var AFrom_idSet = {
                        AForm_idStatus: true, 
                        AForm_id: aForm_data._id
                    }
                    var options = {
                        new: true,
                        upsert:true
                    } 
                    console.log(AFrom_idSet)
                    PibDtl.findOneAndUpdate(combineKeyQuery, {$set: AFrom_idSet}, options, (err)=>{
                        if(err){
                            res.send({'message': `There is some error with your request`})
                        } else {
                            console.log(`A form Id ${aForm_data.CombineKey} updated`)
                        
                            // res.send({'message': `A form Id ${aForm_data.CombineKey} updated`})
                        }
                    })
                }
            })

        }
    }
}

