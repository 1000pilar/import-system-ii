const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const tblPibConModelSchema = new Schema({
    CAR: String,
    ContNo: String,
    ContUkur: String,
    ContTipe: String
}, {timestampts:true})


const tblPibCon = mongoose.model('tblPibCon', tblPibConModelSchema);

module.exports = tblPibCon