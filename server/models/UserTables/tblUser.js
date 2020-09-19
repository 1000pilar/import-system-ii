const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userModel = new Schema({
    name: String,
    username: {type: String, unique:true},
    role: String,
    password: String,
    email: {type: String, unique: true},
    phone: String,
    company: String,
    department: String,
    userstatus: String
}, {timestampts:true})


mongoose.model('User', userModel);

module.exports = userModel

//role: {"import", "ppjk", "purchaser", "sales", "police_registration", "accounting", "finance", "admin", "superuser"}