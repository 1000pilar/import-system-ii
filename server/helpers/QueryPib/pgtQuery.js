function queryPgt(inputPgt){
    var newPgt = {
        CAR: inputPgt.CAR,
        KdBeban: inputPgt.KdBeban,
        KdFasil: inputPgt.KdFasil,
        NilBeban: inputPgt.NilBeban,
        Npwp: inputPgt.Npwp,
        CombineKey: inputPgt.CAR+CombineKey.KdFasil
    }
    return newPgt;
}

module.exports = {
queryPgt
}