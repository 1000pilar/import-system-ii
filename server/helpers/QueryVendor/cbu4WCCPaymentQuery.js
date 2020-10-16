const mongoose = require('mongoose')


function cbu4WCCPaymentQuery(cbu4WCCPaymentData){
    var newCbu4WPaymentData = {
        _id: new mongoose.Types.ObjectId(),
        invoice_number: cbu4WCCPaymentData.invoice_number,
        shipment_type: cbu4WCCPaymentData.shipment_type,
        shipment_term: cbu4WCCPaymentData.shipment_term,
        escort_qty: cbu4WCCPaymentData.escort_qty,
        escort_amount: cbu4WCCPaymentData.escort_amount,
        edi_basic_desc: cbu4WCCPaymentData.edi_basic_desc,
        edi_basic_qty: cbu4WCCPaymentData.edi_basic_qty,
        edi_basic_amount: cbu4WCCPaymentData.edi_basic_amount,
        edi_extra_desc: cbu4WCCPaymentData.edi_extra_desc,
        edi_extra_qty: cbu4WCCPaymentData.edi_extra_qty,
        edi_extra_amount: cbu4WCCPaymentData.edi_extra_amount,
        adm_doc_qty: cbu4WCCPaymentData.adm_doc_qty,
        adm_doc_amount: cbu4WCCPaymentData.adm_doc_amount,
        handling_charge_category: cbu4WCCPaymentData.handling_charge_category,
        handling_charge_qty: cbu4WCCPaymentData.handling_charge_qty,
        handling_charge_amount: cbu4WCCPaymentData.handling_charge_amount,
        gesek_qty: cbu4WCCPaymentData.gesek_qty,
        gesek_amount: cbu4WCCPaymentData.gesek_amount,
        sticker_qty: cbu4WCCPaymentData.gesek_qty,
        sticker_amount: cbu4WCCPaymentData.sticker_amount,
        inland_transp_desc: cbu4WCCPaymentData.inland_transp_desc,
        inland_transp_qty: cbu4WCCPaymentData.inland_transp2_qty,
        inland_transp_amount: cbu4WCCPaymentData.inland_transp_amount,
        inland_transp2_desc: cbu4WCCPaymentData.inland_transp2_desc,
        inland_transp2_qty: cbu4WCCPaymentData.inland_transp2_qty,
        inland_transp2_amount: cbu4WCCPaymentData.inland_transp2_amount,
        storage_qty: cbu4WCCPaymentData.storage_qty,
        storage_amount: cbu4WCCPaymentData.storage_amount,
        stepdooring_qty: cbu4WCCPaymentData.stepdooring_qty,
        stepdooring_amount: cbu4WCCPaymentData.stepdooring_amount,
        other_expand_1_desc: cbu4WCCPaymentData.other_expand_1_desc,
        other_expand_1_qty: cbu4WCCPaymentData.other_expand_1_qty,
        other_expand_1_amount: cbu4WCCPaymentData.other_expand_1_amount,
        other_expand_2_desc: cbu4WCCPaymentData.other_expand_2_desc,
        other_expand_2_qty: cbu4WCCPaymentData.other_expand_2_qty,
        other_expand_2_amount: cbu4WCCPaymentData.other_expand_2_amount,
        other_expand_3_desc: cbu4WCCPaymentData.other_expand_3_desc,
        other_expand_3_qty: cbu4WCCPaymentData.other_expand_3_qty,
        other_expand_3_amount: cbu4WCCPaymentData.other_expand_3_amount,
        other_expand_4_desc: cbu4WCCPaymentData.other_expand_4_desc,
        other_expand_4_qty: cbu4WCCPaymentData.other_expand_4_qty,
        other_expand_4_amount: cbu4WCCPaymentData.other_expand_4_amount,
        tax: cbu4WCCPaymentData.tax,
        total_invoice_amount: cbu4WCCPaymentData.total_invoice_amount,
        create_by:{name: cbu4WCCPaymentData.name, company: cbu4WCCPaymentData.company}
    }
    return newCbu4WPaymentData;        
}

module.exports = {
    cbu4WCCPaymentQuery
}