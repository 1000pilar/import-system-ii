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
    Penetapan: String
}, {timestampts:true})


const tblPibResNPBL = mongoose.model('tblPibResNPBL', tblPibResNPBLSchema);

module.exports = tblPibResNPBL