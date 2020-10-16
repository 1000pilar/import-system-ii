function queryFas(inputFas){
    var newFas = {
        CAR: inputFas.CAR,
        Serial: inputFas.Serial,
        KdFasBM: inputFas.KdFasBM,
        FasBM: inputFas.FasBM,
        KdFasCuk: inputFas.KdFasCuk,
        FasCuk: inputFas.FasCuk,
        KdFasPpn: inputFas.KdFasPpn,
        FasPpn: inputFas.FasPpn,
        KdFasPph: inputFas.KdFasPph,
        FasPph: inputFas.FasPph,
        KdFasPbm: inputFas.KdFasPbm,
        FasPbm: inputFas.FasPbm,
        KdFasBMAD: inputFas.KdFasBMAD,
        FasBMAD: inputFas.FasBMAD,
        BMADS: inputFas.BMADS,
        KdFasBMTP: inputFas.KdFasBMTP,
        FasBMTP: inputFas.FasBMTP,
        BMTPS: inputFas.BMTPS,
        KdFasBMIM: inputFas.KdFasBMIM,
        FasBMIM: inputFas.FasBMIM,
        BMIMS: inputFas.BMIMS,
        KdFasBMPB: inputFas.KdFasBMPB,
        FasBMPB: inputFas.FasBMPB,
        BMPBS: inputFas.BMPBS,
        CombineKey: inputFas.CAR+inputFas.Serial
    }
    return newFas;
}

module.exports = {
    queryFas
}