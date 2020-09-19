const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibDtlDok = new Schema({
    CAR: String,
    Serial: String,
    KdFasDtl: String,
    NoUrut: String,
    DokKd: String,
    DokNo: String,
    DokTg: Date,
    KdGroupDok: String,
    NoSeriBrgSkep: String
}, {timestampts:true})


mongoose.model('TblPibDtlDok', tblPibDtlDok);

module.exports = tblPibDtlDok