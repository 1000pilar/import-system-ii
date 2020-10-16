const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const tblCbu4wCCPaymentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    invoice_number: String,
    shipment_type: String,
    shipment_term: String,
    escort_qty: {type:Number, default:0},
    escort_amount: {type:Number, default:0},
    edi_basic_desc: {type:String, default:0},
    edi_basic_qty: {type:Number, default:0},
    edi_basic_amount: {type:Number, default:0},
    edi_extra_desc: {type:Number, default:0},
    edi_extra_qty: {type:Number, default:0},
    edi_extra_amount: {type:Number, default:0},
    adm_doc_qty: {type:Number, default:0},
    adm_doc_amount: {type:Number, default:0},
    handling_charge_category: {type:String, default:0},
    handling_charge_qty: {type:Number, default:0},
    handling_charge_amount: {type:Number, default:0},
    gesek_qty: {type:Number, default:0},
    gesek_amount: {type:Number, default:0},
    sticker_qty: {type:Number, default:0},
    sticker_amount: {type:Number, default:0},
    inland_transp_desc: {type:String, default:0},
    inland_transp_qty: {type:Number, default:0},
    inland_transp_amount: {type:Number, default:0},
    inland_transp2_desc: {type:String, default:0},
    inland_transp2_qty: {type:Number, default:0},
    inland_transp2_amount: {type:Number, default:0},
    storage_qty: {type:Number, default:0},
    storage_amount: {type:Number, default:0},
    stepdooring_qty: {type:Number, default:0},
    stepdooring_amount: {type:Number, default:0},
    other_expand_1_desc: {type:String, default:0},
    other_expand_1_qty: {type:Number, default:0},
    other_expand_1_amount: {type:Number, default:0},
    other_expand_2_desc: {type:String, default:0},
    other_expand_2_qty: {type:Number, default:0},
    other_expand_2_amount: {type:Number, default:0},
    other_expand_3_desc: {type:String, default:0},
    other_expand_3_qty: {type:Number, default:0},
    other_expand_3_amount: {type:Number, default:0},
    other_expand_4_desc: {type:String, default:0},
    other_expand_4_qty: {type:Number, default:0},
    other_expand_4_amount: {type:Number, default:0},
    tax: Number,
    total_invoice_amount: Number,
    create_by:{name: String, company: String}
}, {timestamps:true})

const tblCbu4wCCPayment = mongoose.model('tblCbu4wCCPayment', tblCbu4wCCPaymentSchema);

module.exports = tblCbu4wCCPayment

