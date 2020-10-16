const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibResBillSchema = new Schema({
    CAR: String,
    ResTg: Date,
    ResWk: String,
    Akun: String,
    NPWP: String,
    Nilai: Number
}, {timestampts:true})

const tblPibResBill = mongoose.model('tblPibResBill', tblPibResBillSchema);

module.exports = tblPibResBill