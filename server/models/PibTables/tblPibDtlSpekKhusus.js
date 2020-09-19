const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibDtlSpekKhususSchema = new Schema({
    CAR: String,
    Serial: String,
    CAS1: String,
    CAS2: String
}, {timestampts:true})


const tblPibDtlSpekKhusus = mongoose.model('tblPibDtlSpekKhusus', tblPibDtlSpekKhususSchema);

module.exports = tblPibDtlSpekKhusus