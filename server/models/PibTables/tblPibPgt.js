const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibPgt = new Schema({
    CAR: String,
    KdBeban: String,
    KdFasil: String,
    NilBeban: Number,
    Npwp: String
}, {timestampts:true})


mongoose.model('TblPibPgt', tblPibPgt);

module.exports = tblPibPgt