const  mongoose = require('mongoose')
const { ObjectId } = require('mongodb')
const Schema = mongoose.Schema


const tblAirCCPaymentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    invoice_number: String,
    shipment_type: String,
    shipment_term: String,
    doc_fee: Number,
    wh_torage: Number,
    handling_tranport: Number,
    other_handling: Number,
    Inklaring_charge: Number,
    materai: Number,
    tax: Number,
    air_freight: Number,
    other_expand_1_desc: String,
    other_expand_1_qty: Number,
    other_expand_1_amount: Number,
    other_expand_2_desc: String,
    other_expand_2_qty: Number,
    other_expand_2_amount: Number,
    other_expand_3_desc: String,
    other_expand_3_qty: Number,
    other_expand_3_amount: Number,
    total_invoice_amount: Number,
    create_by:{name: String, company: String}
}, {timestamps: true})

const tblAirCCPayment = mongoose.model('tblAirCCPayment', tblAirCCPaymentSchema)

module.exports = tblAirCCPayment

