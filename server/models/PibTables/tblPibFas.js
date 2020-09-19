const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibFas = new Schema({
    CAR: String,
    Serial: String,
    KdFasBM: String,
    FasBM: Number,
    KdFasCuk: String,
    FasCuk: Number,
    KdFasPpn: String,
    FasPpn: Number,
    KdFasPph: String,
    FasPph: Number,
    KdFasPbm: String,
    FasPbm: Number,
    KdFasBMAD: String,
    FasBMAD: Number,
    BMADS: String,
    KdFasBMTP: String,
    FasBMTP: Number,
    BMTPS: String,
    KdFasBMIM: String,
    FasBMIM: Number,
    BMIMS: String,
    KdFasBMPB: String,
    FasBMPB: Number,
    BMPBS: String
}, {timestampts:true})


mongoose.model('TblPibFas', tblPibFas);

module.exports = tblPibFas