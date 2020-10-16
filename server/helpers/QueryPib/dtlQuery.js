function queryDtl(inputDtl, inputNonBup){
    var newDtl = {
        CombineKey: inputDtl.CAR+inputDtl.Serial,
        CAR: inputDtl.CAR,
        Serial: inputDtl.Serial,
        NoHs: inputDtl.NoHs,
        SeriTrp: inputDtl.SeriTrp,
        BrgUrai: inputDtl.BrgUrai,
        Merk: inputDtl.Merk,
        Tipe: inputDtl.Tipe,//use split(" ").joint("") or we just filter type in the frontend ?
        SpfLain: inputDtl.SpfLain,
        BrgAsal: inputDtl.BrgAsal,
        DNilInv: inputDtl.DNilInv,
        DCif: inputDtl.DCif,
        KdSat: inputDtl.KdSat,
        JmlSat: inputDtl.JmlSat,
        KemasJn: inputDtl.KemasJn,
        KemasJm: inputDtl.KemasJm,
        SatBmJm: inputDtl.SatBmJm,
        SatCukJm: inputDtl.SatCukJm,
        NettoDtl: inputDtl.NettoDtl,
        KdFasDtl: inputDtl.KdFasDtl,
        DtlOk: inputDtl.DtlOk,
        FlBarangBaru: inputDtl.FlBarangBaru,
        FlLartas: inputDtl.FlLartas,
        KatLartas: inputDtl.KatLartas,
        SpekTarif: inputDtl.SpekTarif,
        DNilCuk: inputDtl.DNilCuk,
        JmPC: inputDtl.JmPC,
        SaldoAwalPC: inputDtl.SaldoAwalPC,
        SaldoAkhirPC: inputDtl.SaldoAkhirPC,
        Commodity: inputNonBup.Commodity
    }
    return newDtl;
}

module.exports = {
    queryDtl
}

//should I added commodity? I did added commodity with simple filter by HS Code => works fine
//I just Thinking to add more field to detail => 1. Order Status & Receiving Status.
