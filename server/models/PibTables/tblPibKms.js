const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibKmsSchema = new Schema({
    CAR: String,
    JnKemas: String,
    JmKemas: Number,
    merkkemas: String
}, {timestampts:true})


const tblPibKms = mongoose.model('tblPibKms', tblPibKmsSchema);

module.exports = tblPibKms