const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibResNPBLSchema = new Schema({
    CAR: String,
    reskd: String,
    ResTg: Date,
    ResWk: String,
    Serial: String,
    BrgUrai: String,
    ketentuan: String,
    pemberitahuan: String,
    Penetapan: String,
    CombineKey: String
}, {timestampts:true})


const tblPibResNPBL = mongoose.model('TblPibResNPBL', tblPibResNPBLSchema);

module.exports = tblPibResNPBL