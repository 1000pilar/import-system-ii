const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibPgtSchema = new Schema({
    CAR: String,
    KdBeban: String,
    KdFasil: String,
    NilBeban: Number,
    Npwp: String,
    CombineKey: String
}, {timestampts:true})


const tblPibPgt = mongoose.model('tblPibPgt', tblPibPgtSchema);

module.exports = tblPibPgt