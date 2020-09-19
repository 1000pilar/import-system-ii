const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibResNPD = new Schema({
    CAR: String,
    ResTg: Date,
    ResWk: String,
    Seri: String,
    UrDok: String,
    NILAI: Number
}, {timestampts:true})


mongoose.model('TblPibResNPD', tblPibResNPD);

module.exports = tblPibResNPD