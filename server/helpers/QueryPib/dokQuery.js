function queryDok(inputDok){
    var newDok = {
        CAR: inputDok.CAR,
        DokKd: inputDok.DokKd,
        DokNo: inputDok.DokNo,
        DokTg: inputDok.DokTg,
        DokInst: inputDok.DokInst,
        NoUrut: inputDok.NoUrut,
        KdGroupDok: inputDok.KdGroupDok,
        CombineKey: inputDok.CAR+inputDok.DokKd
    }
    return newDok;
}

module.exports = {
    queryDok
}