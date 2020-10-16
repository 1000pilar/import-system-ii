const  mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema


const tblAirCCPaymentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    invoice_number: String,
    shipment_type: String,
    shipment_term: String,
    doc_fee: {type: Number, default:0},
    wh_storage: {type: Number, default:0},
    handling_transport: {type: Number, default:0},
    other_handling: {type: Number, default:0},
    Inklaring_charge: {type: Number, default:0},
    materai: {type: Number, default:0},
    tax: Number,
    air_freight: {type: Number, default:0},
    other_expand_1_desc: {type:String, default: ""},
    other_expand_1_qty: {type:Number, default:0},
    other_expand_1_amount: {type:Number, default:0},
    other_expand_2_desc: {type:String, default: ""},
    other_expand_2_qty: {type:Number, default:0},
    other_expand_2_amount: {type:Number, default:0},
    other_expand_3_desc: {type:String, default: ""},
    other_expand_3_qty: {type:Number, default:0},
    other_expand_3_amount: {type:Number, default:0},
    total_invoice_amount: Number,
    create_by:{name: String, company: String}
}, {timestamps: true})

const tblAirCCPayment = mongoose.model('tblAirCCPayment', tblAirCCPaymentSchema)

module.exports = tblAirCCPayment

