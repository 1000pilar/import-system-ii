const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const tblPibConRSchema = new Schema({
    CAR: String,
    ResKd: String,
    CONTNO: String,
    CONTUKUR: String,
    CONTTIPE: String,
    CombineKey: String
}, {timestampts:true})


const tblPibConR = mongoose.model('tblPibConR', tblPibConRSchema);

module.exports = tblPibConR