
const mongoose = require('mongoose')

function aFormQuery(aFormData){
    var newAform = {
    _id:new mongoose.Types.ObjectId(),
    alamatImportir: aFormData.alamatImportir,
    car: aFormData.car,
    importir: aFormData.importir,
    jenis: aFormData.jenis,
    jnsForm: aFormData.jnsForm,
    kantorPemasukan: aFormData.kantorPemasukan,
    kdKantor: aFormData.kdKantor,
    kota: aFormData.kota,
    merek: aFormData.merek,
    noForm: aFormData.noForm,
    noMesin: aFormData.noMesin,
    noPib: aFormData.noPib,
    noRangka: aFormData.noRangka,
    seqPIB: aFormData.seqPIB,
    seriBrg: aFormData.seriBrg,
    silinder: aFormData.silinder,
    tahun: aFormData.tahun,
    tglForm: aFormData.tglForm,
    tglPib: aFormData.tglPib,
    tipe: aFormData.tipe,
    CombineKey: aFormData.car+aFormData.seriBrg
    }
    return newAform
}

module.exports = {
    aFormQuery
}