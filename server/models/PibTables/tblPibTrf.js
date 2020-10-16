const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tblPibTrfSchema = new Schema({
    CAR: String,
    NoHs: String,
    SeriTrp: String,
    KdTrpBm: String,
    KdSatBm: String,
    TrpBm: Number,
    KdCuk: String,
    KdTrpCuk: String,
    KdSatCuk: String,
    TrpCuk: Number,
    TrpPpn: Number,
    TrpPbm: Number,
    TrpPph: Number,
    KdTrpBmAD: String,
    TrpBmAD: Number,
    KdTrpBmTP: String,
    TrpBmTP: Number,
    KdTrpBmIM: String,
    TrpBmIM: Number,
    KdTrpBmPB: String,
    TrpBmPB: Number,
    KDCUKSUB: String,
    HJECuk: Number,
    KdKmsCuk: String,
    IsiPerKmsCuk: Number,
    FlagTis: String,
    FlagLekat: String,
    CombineKey: String
}, {timestampts:true})


const tblPibTrf = mongoose.model('tblPibTrf', tblPibTrfSchema);

module.exports = tblPibTrf