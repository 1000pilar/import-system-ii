const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tblGaDhlControlPaymentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    dhl_invoice_no: String,
    awb_number: String,
    awb_date: String,
    import_export_duty: Number,
    bank_charge: Number,
    document_charge: Number,
    duty_handling_charge: Number,
    tax: Number,
    total_amount: Number,
    PU_No: String,
    cost_center: String,
    section: String,
    location: String,
    dhl_account: String,
    importing_by: String,
    ship_inv_number: String,
    po_number: String
},{timestamps: true})


const tblGaDhlControlPayment = mongoose.model('tblGaDhlControlPayment', tblGaDhlControlPaymentSchema)

module.exports = tblGaDhlControlPayment