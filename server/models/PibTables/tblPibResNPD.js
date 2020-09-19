const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibResNPDSchema = new Schema({
    CAR: String,
    ResTg: Date,
    ResWk: String,
    Seri: String,
    UrDok: String,
    NILAI: Number
}, {timestampts:true})


const tblPibResNPD = mongoose.model('tblPibResNPD', tblPibResNPDSchema);

module.exports = tblPibResNPD