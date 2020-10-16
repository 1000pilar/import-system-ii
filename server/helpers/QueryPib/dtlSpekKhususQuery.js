function queryDtlSpekKhusus(inputDtlSpekKhusus){
    var newDtlSpekKhusus = {
        CAR: inputDtlSpekKhusus.CAR,
        Serial: inputDtlSpekKhusus.Serial,
        CAS1: inputDtlSpekKhusus.CAS1,
        CAS2: inputDtlSpekKhusus.CAS2,
        CombineKey: inputDtlSpekKhusus.CAR+inputDtlSpekKhusus.Serial
    }
    return newDtlSpekKhusus;
}

module.exports = {
    queryDtlSpekKhusus
}