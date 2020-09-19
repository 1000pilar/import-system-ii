const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibDtlVd = new Schema({
    CAR: String,
    Serial: String,
    Jenis: String,
    Nilai: Number,
    TgJatuhTempo: Date
}, {timestampts:true})


mongoose.model('TblPibDtlVd', tblPibDtlVd);

module.exports = tblPibDtlVd