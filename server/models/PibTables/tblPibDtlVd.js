const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibDtlVdSchema = new Schema({
    CAR: String,
    Serial: String,
    Jenis: String,
    Nilai: Number,
    TgJatuhTempo: Date
}, {timestampts:true})


const tblPibDtlVd = mongoose.model('tblPibDtlVd', tblPibDtlVdSchema);

module.exports = tblPibDtlVd