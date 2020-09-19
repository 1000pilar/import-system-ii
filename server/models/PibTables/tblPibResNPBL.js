const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibResNPBL = new Schema({
    CAR: String,
    reskd: String,
    ResTg: Date,
    ResWk: String,
    Serial: String,
    BrgUrai: String,
    ketentuan: String,
    pemberitahuan: String,
    Penetapan: String
}, {timestampts:true})


mongoose.model('TblPibResNPBL', tblPibResNPBL);

module.exports = tblPibResNPBL