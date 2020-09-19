const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const tblPibDok = new Schema({
    CAR: String,
    DokKd: String,
    DokNo: String,
    DokTg: Date,
    DokInst: String,
    NoUrut: String,
    KdGroupDok: String
}, {timestampts:true})


mongoose.model('TblPibDok', tblPibDok);

module.exports = tblPibDok