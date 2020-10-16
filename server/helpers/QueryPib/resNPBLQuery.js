function queryResNPBL(inputResNPBL){
    var newResNPBL = {
        CAR: inputResNPBL.CAR,
        reskd: inputResNPBL.reskd,
        ResTg: inputResNPBL.ResTg,
        ResWk: inputResNPBL.ResWk,
        Serial: inputResNPBL.Serial,
        BrgUrai: inputResNPBL.BrgUrai,
        ketentuan: inputResNPBL.ketentuan,
        pemberitahuan: inputResNPBL.pemberitahuan,
        Penetapan: inputResNPBL.Penetapan,
        CombineKey: inputResNPBL.CAR+inputResNPBL.reskd
    }
    return newResNPBL;
}

module.exports = {
    queryResNPBL
}