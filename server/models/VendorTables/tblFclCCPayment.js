const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tblFclCCPaymentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    invoice_number: String,
    shipment_type: String,
    shipment_term: String,
    handling_charge: {type:Number, default:0},
    hold_relocation: {type:Number, default:0},
    place_special_loc: {type:Number, default:0},
    adm_doc: {type:Number, default:0},
    pib_edi_charge: {type:Number, default:0},
    escort: {type:Number, default:0},
    cont_per_type: {type:Number, default:0},
    sticker: {type:Number, default:0},
    diff_packing_charge: {type:Number, default:0},
    container_type: {type:String, default:""},
    inland_transport_destination: {type:String, default:""},
    inland_transport_charge: {type:Number, default:0},
    storage_qty: {type:Number, default:0},
    storage_charge: {type:Number, default:0},
    lift_on_charge: {type:Number, default:0},
    other_storage_charge: {type:Number, default:0},
    lift_off: {type:Number, default:0},
    thc_doc_fee: {type:Number, default:0},
    repair: {type:Number, default:0},
    other_expand_1_desc: {type:String, default:""},
    other_expand_1_qty: {type:Number, default:0},
    other_expand_1_amount: {type:Number, default:0},
    other_expand_2_desc: {type:String, default:""},
    other_expand_2_qty: {type:Number, default:0},
    other_expand_2_amount: {type:Number, default:0},
    other_expand_3_desc: {type:String, default:""},
    other_expand_3_qty: {type:Number, default:0},
    other_expand_3_amount: {type:Number, default:0},
    tax: Number,
    total_invoice_amount: Number,
    create_by:{name: String, company: String}
}, {timestamps: true})


const tblFclCCPayment = mongoose.model('tblFclCCPayment', tblFclCCPaymentSchema)

module.exports = tblFclCCPayment