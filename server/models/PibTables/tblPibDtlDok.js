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
    NoSeriBrgSkep: String,
    CombineKey: String
}, {timestampts:true})


const tblPibDtlDok = mongoose.model('TblPibDtlDok', tblPibDtlDokSchema);

module.exports = tblPibDtlDok