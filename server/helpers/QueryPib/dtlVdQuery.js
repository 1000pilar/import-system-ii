function queryDtlVd(inputDtlVd){
    var newDtlVd = {
        CAR: inputDtlVd.CAR,
        Serial: inputDtlVd.Serial,
        Jenis: inputDtlVd.Jenis,
        Nilai: inputDtlVd.Nilai,
        TgJatuhTempo: inputDtlVd.TgJatuhTempo,
        CombineKey: inputDtlVd.CAR+inputDtlVd.Serial
    }
    return newDtlVd;
}

module.exports = {
    queryDtlVd
}