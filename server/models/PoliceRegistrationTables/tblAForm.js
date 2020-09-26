const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema


const tblAFormSchema = new Schema({
    _id: Schema.Types.ObjectId,
    tptId: {type:ObjectId, ref:'tblTpt'},
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
    tglForm: String,
    tglPib: String,
    tipe: String,
    status:Boolean   
},{timestamps: true})


const tblAForm = mongoose.model('tblAForm', tblAFormSchema)

module.exports = tblAForm
