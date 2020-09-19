const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibResSchema = new Schema({
    CAR: String,
    RESKD: String,
    RESTG: Date,
    RESWK: String,
    DOKRESNO: String,
    DOKRESTG: Date,
    KPBC: String,
    PIBNO: String,
    PIBTG: Date,
    KDGUDANG: String,
    PEJABAT1: String,
    Nip1: String,
    JABATAN1: String,
    PEJABAT2: String,
    Nip2: String,
    JATUHTEMPO: Date,
    KOMTG: Date,
    KOMWK: String,
    DesKripsi: String,
    dibaca: String,
    JmKemas: Number,
    NoKemas: String,
    NPWPImp: String,
    NamaImp: String,
    AlamatImp: String,
    IDPPJK: String,
    NamaPPJK: String,
    AlamatPPJK: String,
    KodeBill: String,
    TanggalBill: Date,
    TanggalJtTempo: Date,
    TanggalAju: Date,
    TotalBayar: Number,
    Terbilang: String
}, {timestampts:true})


const tblPibRes = mongoose.model('tblPibRes', tblPibResSchema);

module.exports = tblPibRes