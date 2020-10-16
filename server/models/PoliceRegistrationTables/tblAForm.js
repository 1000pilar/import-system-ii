const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema


const tblAFormSchema = new Schema({
    _id: Schema.Types.ObjectId,
    tptId: {type:Schema.Types.ObjectId, ref:'tblTpt', default: null},
    alamatImportir: String,
    car: String,
    importir: String,
    jenis: String,
    jnsForm: String,
    kantorPemasukan: String,
    kdKantor: String,
    kota: String,
    merek: String,
    noForm: String,
    noMesin: String,
    noPib: String,
    noRangka: String,
    seqPIB: String,
    seriBrg: String,
    silinder: String,
    tahun: String,
    tglForm: Date,
    tglPib: Date,
    tipe: String,
    CombineKey: String,
    status: {type:Boolean, default: false},
    carRegisterNumber: {type:String, default: ""},
    carFakturNumber: {type:String, default: ""} 
},{timestamps: true})


const tblAForm = mongoose.model('tblAForm', tblAFormSchema)

module.exports = tblAForm
