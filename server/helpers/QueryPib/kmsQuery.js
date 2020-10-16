function queryKms(inputKms){
    var newKms = {
        CAR: inputKms.CAR,
        JnKemas: inputKms.JnKemas,
        JmKemas: inputKms.JmKemas,
        merkkemas: inputKms.merkkemas
    }
    return newKms;
}

module.exports = {
queryKms
}