const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tblLclCCPaymentSchema = new Schema({
    _id = Schema.Types.ObjectId,
    invoice_number: String,
    shipment_type: String,
    shipment_term: String,
    handling_charge: Number,
    hold_relocation: Number,
    place_special_loc: Number,
    adm_doc: Number,
    pib_edi_charge: Number,
    escort: Number,
    cont_per_type: Number,
    sticker: Number,
    diff_packing_charge: Number,
    inland_transport_destination: String,
    inland_transport_charge: Number,
    storage_qty: Number,
    storage_charge: Number,
    lift_on_charge: Number,
    other_storage_charge: Number,
    lift_off: Number,
    thc_doc_fee: Number,
    repair: Number,
    other_expand_1_desc: String,
    other_expand_1_qty: Number,
    other_expand_1_amount: Number,
    other_expand_2_desc: String,
    other_expand_2_qty: Number,
    other_expand_2_amount: Number,
    other_expand_3_desc: String,
    other_expand_3_qty: Number,
    other_expand_3_amount: Number,
    tax: Number,
    total_invoice_amount: Number,
    create_by:{name: String, company: String}
}, {timestamps: true})


const tblLclCCPayment = mongoose.model('tblLclCCPayment', tblLclCCPaymentSchema)

module.exports = tblLclCCPayment