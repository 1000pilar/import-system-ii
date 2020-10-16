function queryDtlDok(inputDtlDok){
    var newDtlDok = {
        CAR: inputDtlDok.CAR,
        Serial: inputDtlDok.Serial,
        KdFasDtl: inputDtlDok.KdFasDtl,
        NoUrut: inputDtlDok.NoUrut,
        DokKd: inputDtlDok.DokKd,
        DokNo: inputDtlDok.DokNo,
        DokTg: inputDtlDok.DokTg,
        KdGroupDok: inputDtlDok.KdGroupDok,
        NoSeriBrgSkep: inputDtlDok.NoSeriBrgSkep,
        CombineKey: inputDtlDok.CAR+inputDtlDok.Serial
    }
    return newDtlDok;
}

module.exports = {
    queryDtlDok
}