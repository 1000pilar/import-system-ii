const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const tblPibConModel = new Schema({
    CAR: String,
    ContNo: String,
    ContUkur: String,
    ContTipe: String
}, {timestampts:true})


mongoose.model('TblPibConModel', tblPibConModel);

module.exports = tblPibConModel