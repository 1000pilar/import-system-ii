const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const tblPibDtlSchema = new Schema({
    CAR: String,
    Serial: String,
    NoHs: String,
    SeriTrp: String,
    BrgUrai: String,
    Merk: String,
    Tipe: String,
    SpfLain: String,
    BrgAsal: String,
    DNilInv: Number,
    DCif: Number,
    KdSat: String,
    JmlSat: Number,
    KemasJn: String,
    KemasJm: Number,
    SatBmJm: Number,
    SatCukJm: Number,
    NettoDtl: Number,
    KdFasDtl: String,
    DtlOk: String,
    FlBarangBaru: String,
    FlLartas: String,
    KatLartas: String,
    SpekTarif: String,
    DNilCuk: Number,
    JmPC: Number,
    SaldoAwalPC: Number,
    SaldoAkhirPC: Number
}, {timestampts:true})


const tblPibDtl = mongoose.model('tblPibDtl', tblPibDtlSchema);

module.exports = tblPibDtl