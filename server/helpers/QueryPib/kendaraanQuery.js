function queryKendaraan(inputKendaraan){
    var newKendaraan = {
        CAR: inputKendaraan.CAR,
        Serial: inputKendaraan.Serial,
        NoRangka: inputKendaraan.NoRangka,
        NoMesin: inputKendaraan.NoMesin,
        Silinder: inputKendaraan.Silinder,
        Tahun: inputKendaraan.Tahun,
        FlagCbu: inputKendaraan.FlagCbu,
        CombineKey: inputKendaraan.CAR+inputKendaraan.Serial
    }
    return newKendaraan;
}

module.exports = {
    queryKendaraan
}