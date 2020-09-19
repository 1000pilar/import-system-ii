const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const tblPibConR = new Schema({
    CAR: String,
    ResKd: String,
    CONTNO: String,
    CONTUKUR: String,
    CONTTIPE: String
}, {timestampts:true})


mongoose.model('TblPibConR', tblPibConR);

module.exports = tblPibConR