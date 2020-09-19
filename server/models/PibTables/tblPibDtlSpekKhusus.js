const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibDtlSpekKhusus = new Schema({
    CAR: String,
    Serial: String,
    CAS1: String,
    CAS2: String
}, {timestampts:true})


mongoose.model('TblPibDtlSpekKhusus', tblPibDtlSpekKhusus);

module.exports = tblPibDtlSpekKhusus