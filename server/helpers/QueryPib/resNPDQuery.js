function queryResNPD(inputResNPD){
    var newResNPD = {
        CAR: inputResNPD.CAR,
        ResTg: inputResNPD.ResTg,
        ResWk: inputResNPD.ResWk,
        Seri: inputResNPD.Seri,
        UrDok: inputResNPD.UrDok,
        NILAI: inputResNPD.NILAI,
        CombineKey: inputResNPD.CAR+inputResNPD.Seri
    }
    return newResNPD;
}

module.exports = {
    queryResNPD
}