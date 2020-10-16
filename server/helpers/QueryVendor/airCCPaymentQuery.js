const mongoose = require('mongoose')


function airCCPaymentQuery(airCCPaymentData){
    var newAirCCPaymentData = {
        _id: new mongoose.Types.ObjectId(),
       invoice_number: airCCPaymentData.invoice_number,
       shipment_type: airCCPaymentData.shipment_type,
       shipment_term: airCCPaymentData.shipment_term,
       doc_fee: airCCPaymentData.doc_fee,
       wh_storage: airCCPaymentData.wh_storage,
       handling_tranport: airCCPaymentData.handling_transport,
       other_handling: airCCPaymentData.Inklaring_charge,
       Inklaring_charge: airCCPaymentData.Inklaring_charge,
       materai: airCCPaymentData.materai,
       tax: airCCPaymentData.tax,
       air_freight: airCCPaymentData.air_freight,
       other_expand_1_desc: airCCPaymentData.other_expand_1_desc,
       other_expand_1_qty: airCCPaymentData.other_expand_1_qty,
       other_expand_1_amount: airCCPaymentData.other_expand_1_amount,
       other_expand_2_desc: airCCPaymentData.other_expand_2_desc,
       other_expand_2_qty: airCCPaymentData.other_expand_2_qty,
       other_expand_2_amount: airCCPaymentData.other_expand_2_amount,
       other_expand_3_desc: airCCPaymentData.other_expand_3_desc,
       other_expand_3_qty: airCCPaymentData.other_expand_3_qty,
       other_expand_3_amount: airCCPaymentData.other_expand_3_amount,
       total_invoice_amount: airCCPaymentData.total_invoice_amount,
       create_by:{name: airCCPaymentData.name, company: airCCPaymentData.company}
    }
    return newAirCCPaymentData;        
}

module.exports = {
    airCCPaymentQuery
}