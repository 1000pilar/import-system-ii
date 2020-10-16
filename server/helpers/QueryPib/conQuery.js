function queryCon(inputCon){
    var newCon = {
        CAR: inputCon.CAR,
        ContNo: inputCon.ContNo,
        ContUkur: inputCon.ContUkur,
        ContTipe: inputCon.ContTipe,
        CombineKey: inputCon.CAR+inputCon.ContNo
    }
    return newCon;
}

module.exports = {
    queryCon
}