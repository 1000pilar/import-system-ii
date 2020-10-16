const mongoose = require('mongoose')


function fclCCPaymentQuery(fclCCPaymentData){
    var newfclCCPaymentData = {
        _id: new mongoose.Types.ObjectId(),
        invoice_number: fclCCPaymentData.invoice_number,
        shipment_type: fclCCPaymentData.shipment_type,
        shipment_term: fclCCPaymentData.shipment_term,
        handling_charge: fclCCPaymentData.handling_charge,
        hold_relocation: fclCCPaymentData.hold_relocation,
        place_special_loc: fclCCPaymentData.place_special_loc,
        adm_doc: fclCCPaymentData.adm_doc,
        pib_edi_charge: fclCCPaymentData.pib_edi_charge,
        escort: fclCCPaymentData.escort,
        cont_per_type: fclCCPaymentData.cont_per_type,
        sticker: fclCCPaymentData.sticker,
        diff_packing_charge: fclCCPaymentData.diff_packing_charge,
        container_type: fclCCPaymentData.container_type,
        inland_transport_destination: fclCCPaymentData.inland_transport_destination,
        inland_transport_charge: fclCCPaymentData.inland_transport_charge,
        storage_qty: fclCCPaymentData.storage_qty,
        storage_charge: fclCCPaymentData.storage_charge,
        lift_on_charge: fclCCPaymentData.lift_on_charge,
        other_storage_charge: fclCCPaymentData.other_storage_charge,
        lift_off: fclCCPaymentData.lift_on_charge,
        thc_doc_fee: fclCCPaymentData.thc_doc_fee,
        repair: fclCCPaymentData.repair,
        other_expand_1_desc: fclCCPaymentData.other_expand_1_desc,
        other_expand_1_qty: fclCCPaymentData.other_expand_1_qty,
        other_expand_1_amount: fclCCPaymentData.other_expand_1_amount,
        other_expand_2_desc: fclCCPaymentData.other_expand_2_desc,
        other_expand_2_qty: fclCCPaymentData.other_expand_2_qty,
        other_expand_2_amount: fclCCPaymentData.other_expand_2_amount,
        other_expand_3_desc: fclCCPaymentData.other_expand_3_desc,
        other_expand_3_qty: fclCCPaymentData.other_expand_3_qty,
        other_expand_3_amount: fclCCPaymentData.other_expand_3_amount,
        tax: fclCCPaymentData.tax,
        total_invoice_amount: fclCCPaymentData.total_invoice_amount,
        create_by:{name: fclCCPaymentData.name, company: fclCCPaymentData.company}
    }
    return newfclCCPaymentData;        
}

module.exports = {
    fclCCPaymentQuery
}