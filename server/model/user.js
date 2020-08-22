const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userModel = new Schema({
    name: String,
    role: String,
    password: String,
    email: String,
    Company: String,
    department: String

})


mongoose.model('User', userModel);

module.exports = userModel