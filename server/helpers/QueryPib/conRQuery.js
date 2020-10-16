function queryConR(inputConR){
    var newConR = {
        CAR: inputConR.CAR,
        ResKd: inputConR.ResKd,
        CONTNO: inputConR.CONTNO,
        CONTUKUR: inputConR.CONTUKUR,
        CONTTIPE: inputConR.CONTTIPE,
        CombineKey: inputConR.CAR+inputConR.CONTNO

    }
    return newConR;
}

module.exports = {
    queryConR
}