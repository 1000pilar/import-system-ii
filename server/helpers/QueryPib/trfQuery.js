function queryTrf(inputTrf){
    var newTrf = {
        CAR: inputTrf.CAR,
        NoHs: inputTrf.NoHs,
        SeriTrp: inputTrf.SeriTrp,
        KdTrpBm: inputTrf.KdSatBm,
        KdSatBm: inputTrf.KdSatBm,
        TrpBm: inputTrf.TrpBm,
        KdCuk: inputTrf.KdCuk,
        KdTrpCuk: inputTrf.KdTrpCuk,
        KdSatCuk: inputTrf.KdSatCuk,
        TrpCuk: inputTrf.TrpCuk,
        TrpPpn: inputTrf.TrpCuk,
        TrpPbm: inputTrf.TrpPbm,
        TrpPph: inputTrf.TrpPph,
        KdTrpBmAD: inputTrf.KdTrpBmAD,
        TrpBmAD: inputTrf.TrpBmAD,
        KdTrpBmTP: inputTrf.KdTrpBmTP,
        TrpBmTP: inputTrf.TrpBmTP,
        KdTrpBmIM: inputTrf.KdTrpBmIM,
        TrpBmIM: inputTrf.TrpBmIM,
        KdTrpBmPB: inputTrf.KdTrpBmTP,
        TrpBmPB: inputTrf.TrpBmPB,
        KDCUKSUB: inputTrf.KDCUKSUB,
        HJECuk: inputTrf.HJECuk,
        KdKmsCuk: inputTrf.KdKmsCuk,
        IsiPerKmsCuk: inputTrf.IsiPerKmsCuk,
        FlagTis: inputTrf.FlagTis,
        FlagLekat: inputTrf.FlagLekat,
        CombineKey: inputTrf.CAR+inputTrf.SeriTrp
    }
    return newTrf;
}

module.exports = {
    queryTrf
}