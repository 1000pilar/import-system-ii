const mongoose = require('mongoose')


function lclCCPaymentQuery(lclCCPaymentData){
    var newlclCCPaymentData = {
    _id: new mongoose.Types.ObjectId(),
    invoice_number: lclCCPaymentData.invoice_number,
    shipment_type: lclCCPaymentData.shipment_type,
    shipment_term: lclCCPaymentData.shipment_term,
    handling_charge: lclCCPaymentData.handling_charge,
    hold_relocation: lclCCPaymentData.hold_relocation,
    place_special_loc: lclCCPaymentData.place_special_loc,
    adm_doc: lclCCPaymentData.adm_doc,
    pib_edi_charge: lclCCPaymentData.pib_edi_charge,
    escort: lclCCPaymentData.escort,
    cont_per_type: lclCCPaymentData.cont_per_type,
    sticker: lclCCPaymentData.sticker,
    diff_packing_charge: lclCCPaymentData.diff_packing_charge,
    inland_transport_destination: lclCCPaymentData.inland_transport_destination,
    inland_transport_charge: lclCCPaymentData.inland_transport_charge,
    storage_qty: lclCCPaymentData.storage_qty,
    storage_charge: lclCCPaymentData.storage_charge,
    lift_on_charge: lclCCPaymentData.lift_on_charge,
    other_storage_charge: lclCCPaymentData.other_storage_charge,
    lift_off: lclCCPaymentData.lift_off,
    thc_doc_fee: lclCCPaymentData.thc_doc_fee,
    repair: lclCCPaymentData.repair,
    other_expand_1_desc: lclCCPaymentData.other_expand_1_desc,
    other_expand_1_qty: lclCCPaymentData.other_expand_1_qty,
    other_expand_1_amount: lclCCPaymentData.other_expand_1_amount,
    other_expand_2_desc: lclCCPaymentData.other_expand_2_desc,
    other_expand_2_qty: lclCCPaymentData,other_expand_2_qty,
    other_expand_2_amount: lclCCPaymentData.other_expand_2_amount,
    other_expand_3_desc: lclCCPaymentData.other_expand_3_desc,
    other_expand_3_qty: lclCCPaymentData.other_expand_3_qty,
    other_expand_3_amount: lclCCPaymentData.other_expand_3_amount,
    tax: lclCCPaymentData.tax,
    total_invoice_amount: lclCCPaymentData.total_invoice_amount,
    create_by:{name: lclCCPaymentData.name, company: lclCCPaymentData.company}
    }
    return newlclCCPaymentData;        
}

module.exports = {
    lclCCPaymentQuery
}