const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const tblCbu4wCCPaymentModel = new Schema({
    _id: Schema.Types.ObjectId,
    invoice_number: String,
    escort_qty: Number,
    escort_amount: Number,
    edi_basic_desc: String,
    edi_basic_qty: Number,
    edi_basic_amount: Number,
    edi_extra_desc: Number,
    edi_extra_qty: Number,
    edi_extra_amount: Number,
    adm_doc_qty: Number,
    adm_doc_amount: Number,
    handling_charge_category: String,
    handling_charge_qty: Number,
    handling_charge_amount: Number,
    gesek_qty: Number,
    gesek_amount: Number,
    sticker_qty: Number,
    sticker_amount: Number,
    inland_transp_desc: String,
    inland_transp_qty: Number,
    inland_transp_amount: Number,
    storage_qty: Number,
    storage_amount: Number,
    stepdooring_qty: Number,
    stepdooring_amount: Number,
    other_expand_1_desc: String,
    other_expand_1_qty: Number,
    other_expand_1_amount: Number,
    other_expand_2_desc: String,
    other_expand_2_qty: Number,
    other_expand_2_amount: Number,
    other_expand_3_desc: String,
    other_expand_3_qty: Number,
    other_expand_3_amount: Number,
    other_expand_4_desc: String,
    other_expand_4_qty: Number,
    other_expand_4_amount: Number,
    total_invoice_amount: Number,
    create_by:{name: String, company: String}
}, {timestamps:true})

mongoose.model('TblCbu4wCCPaymentModel', tblCbu4wCCPaymentModel);

module.exports = tblCbu4wCCPaymentModel

