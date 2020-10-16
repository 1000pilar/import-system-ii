function queryRes(inputRes){
    var newRes = {
        CAR: inputRes.CAR,
        RESKD: inputRes.RESKD,
        RESTG: inputRes.RESTG,
        RESWK: inputRes.RESWK,
        DOKRESNO: inputRes.DOKRESNO,
        DOKRESTG: inputRes.DOKRESTG,
        KPBC: inputRes.KPBC,
        PIBNO: inputRes.PIBNO,
        PIBTG: inputRes.PIBTG,
        KDGUDANG: inputRes.KDGUDANG,
        PEJABAT1: inputRes.PEJABAT1,
        Nip1: inputRes.Nip1,
        JABATAN1: inputRes.JABATAN1,
        PEJABAT2: inputRes.PEJABAT2,
        Nip2: inputRes.Nip2,
        JATUHTEMPO: inputRes.JATUHTEMPO,
        KOMTG: inputRes.KOMTG,
        KOMWK: inputRes.KOMWK,
        DesKripsi: inputRes.DesKripsi,
        dibaca: inputRes.dibaca,
        JmKemas: inputRes.JmKemas,
        NoKemas: inputRes.NoKemas,
        NPWPImp: inputRes.NPWPImp,
        NamaImp: inputRes.NamaImp,
        AlamatImp: inputRes.AlamatImp,
        IDPPJK: inputRes.IDPPJK,
        NamaPPJK: inputRes.NamaPPJK,
        AlamatPPJK: inputRes.AlamatPPJK,
        KodeBill: inputRes.KodeBill,
        TanggalBill: inputRes.TanggalBill,
        TanggalJtTempo: inputRes.TanggalJtTempo,
        TanggalAju: inputRes.TanggalAju,
        TotalBayar: inputRes.TotalBayar,
        Terbilang: inputRes.Terbilang,
        CombineKey: inputRes.CAR+inputRes.RESKD
    }
    return newRes;
}   

module.exports = {
    queryRes
}