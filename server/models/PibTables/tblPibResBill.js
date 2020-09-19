const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibResBill = new Schema({
    CAR: String,
    ResTg: Date,
    ResWk: String,
    Akun: String,
    NPWP: String,
    Nilai: Number
}, {timestampts:true})


mongoose.model('TblPibResBill', tblPibResBill);

module.exports = tblPibResBill