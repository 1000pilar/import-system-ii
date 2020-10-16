const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibDtlSpekKhususSchema = new Schema({
    CAR: String,
    Serial: String,
    CAS1: String,
    CAS2: String,
    CombineKey: String
}, {timestampts:true})


const tblPibDtlSpekKhusus = mongoose.model('TblPibDtlSpekKhusus', tblPibDtlSpekKhususSchema);

module.exports = tblPibDtlSpekKhusus