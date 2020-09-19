const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibKendaraan = new Schema({
    CAR: String,
    Serial: String,
    NoRangka: String,
    NoMesin: String,
    Silinder: String,
    Tahun: String,
    FlagCbu: String
}, {timestampts:true})


mongoose.model('TblPibKendaraan', tblPibKendaraan);

module.exports = tblPibKendaraan