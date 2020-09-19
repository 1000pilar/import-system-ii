const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const tblPibDokSchema = new Schema({
    CAR: String,
    DokKd: String,
    DokNo: String,
    DokTg: Date,
    DokInst: String,
    NoUrut: String,
    KdGroupDok: String
}, {timestampts:true})


const tblPibDok = mongoose.model('tblPibDok', tblPibDokSchema);

module.exports = tblPibDok