const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const Schema = mongoose.Schema;


const tblPibKendaraanSchema = new Schema({
    CAR: String,
    Serial: String,
    NoRangka: String,
    NoMesin: String,
    Silinder: String,
    Tahun: String,
    FlagCbu: String,
    CombineKey: String
}, {timestampts:true})


const tblPibKendaraan = mongoose.model('tblPibKendaraan', tblPibKendaraanSchema);

module.exports = tblPibKendaraan