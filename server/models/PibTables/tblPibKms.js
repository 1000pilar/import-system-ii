const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibKms = new Schema({
    CAR: String,
    JnKemas: String,
    JmKemas: Number,
    merkkemas: String
}, {timestampts:true})


mongoose.model('TblPibKms', tblPibKms);

module.exports = tblPibKms