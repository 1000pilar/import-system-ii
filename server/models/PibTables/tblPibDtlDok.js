const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibDtlDokSchema = new Schema({
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


const tblPibDtlDok = mongoose.model('tblPibDtlDok', tblPibDtlDokSchema);

module.exports = tblPibDtlDok