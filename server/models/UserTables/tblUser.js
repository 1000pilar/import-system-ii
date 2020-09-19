const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userModelSchema = new Schema({
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


const User = mongoose.model('User', userModelSchema);

module.exports = User

//role: {"import", "ppjk", "purchaser", "sales", "police_registration", "accounting", "finance", "admin", "superuser"}