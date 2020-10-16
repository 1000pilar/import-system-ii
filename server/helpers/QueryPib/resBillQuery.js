function queryResBill(inputResBill){
    var newResBill = {
        CAR: inputResBill.CAR,
        ResTg: inputResBill.ResTg,
        ResWk: inputResBill.ResWk,
        Akun: inputResBill.Akun,
        NPWP: inputResBill.NPWP,
        Nilai: inputResBill.Nilai
    }
    return newResBill;
}

module.exports = {
    queryResBill
}