function queryNpt(inputNpt){
    var newNpt = {
        CAR: inputNpt.CAR,
        ResKd: inputNpt.ResKd,
        RESTG: inputNpt.RESTG,
        RESWK: inputNpt.RESWK,
        Asal: inputNpt.Asal,
        BM_Asal: inputNpt.BM_Asal,
        CUK_Asal: inputNpt.CUK_Asal,
        PPN_Asal: inputNpt.PPN_Asal,
        PPNBM_Asal: inputNpt.PPNBM_Asal,
        PPH_Asal: inputNpt.PPH_Asal,
        Ditetapkan: inputNpt.Ditetapkan,
        BMBYR: inputNpt.BMBYR,
        CUKBYR: inputNpt.CUKBYR,
        PPNBYR: inputNpt.PPNBYR,
        PPNBMBYR: inputNpt.PPNBMBYR,
        PPHBYR: inputNpt.PPHBYR,
        DENDA: inputNpt.DENDA,
        Kurang: inputNpt.Kurang,
        BM_Kurang: inputNpt.BM_Kurang,
        CUK_Kurang: inputNpt.CUK_Kurang,
        PPN_Kurang: inputNpt.PPN_Kurang,
        PPNBM_Kurang: inputNpt.PPNBM_Kurang,
        PPH_Kurang: inputNpt.PPH_Kurang,
        Lebih: inputNpt.Lebih,
        BM_Lebih: inputNpt.BM_Lebih,
        CUK_Lebih: inputNpt.CUK_Lebih,
        PPN_Lebih: inputNpt.PPN_Lebih,
        PPNBM_Lebih: inputNpt.PPNBM_Lebih,
        PPH_Lebih: inputNpt.PPH_Lebih,
        JenisSalahDll: inputNpt.JenisSalahDll,
        Total_Kurang: inputNpt.Total_Kurang,
        Total_Lebih: inputNpt.Total_Lebih,
        S_JnsBrg: inputNpt.S_JnsBrg,
        S_JmlBrg:inputNpt.S_JmlBrg,
        S_Tarif: inputNpt.S_Tarif,
        S_NilPab: inputNpt.S_NilPab,
        BMAD_Asal: inputNpt.BMAD_Asal,
        BMADBYR: inputNpt.BMADBYR,
        BMAD_KURANG: inputNpt.BMAD_KURANG,
        BMAD_Lebih: inputNpt.BMAD_Lebih,
        BMI_Asal: inputNpt.BMI_Asal,
        BMIBYR: inputNpt.BMIBYR,
        BMI_KURANG: inputNpt.BMI_KURANG,
        BMI_Lebih: inputNpt.BMI_Lebih,
        BMTP_Asal: inputNpt.BMTP_Asal,
        BMTPBYR: inputNpt.BMTPBYR,
        BMTP_KURANG: inputNpt.BMTP_KURANG,
        BMTP_Lebih: inputNpt.BMTP_Lebih,
        BMADS_Asal: inputNpt.BMADS_Asal,
        BMADSBYR: inputNpt.BMADSBYR,
        BMADS_KURANG: inputNpt.BMADS_KURANG,
        BMADS_Lebih: inputNpt.BMADS_Asal,
        BMIS_Asal: inputNpt.BMIS_Asal,
        BMISBYR: inputNpt.BMISBYR,
        BMIS_KURANG: inputNpt.BMIS_KURANG,
        BMIS_Lebih:inputNpt.BMIS_Asal,
        BMTPS_Asal: inputNpt.BMTPS_Asal,
        BMTPSBYR: inputNpt.BMTPSBYR,
        BMTPS_KURANG: inputNpt.BMTPS_KURANG,
        BMTPS_Lebih: inputNpt.BMTPS_Lebih,
        BMKT_Asal:inputNpt.BMKT_Asal,
        BMKT: inputNpt.BMKT,
        BMKT_KURANG: inputNpt.BMKT_KURANG,
        BMKT_Lebih: inputNpt.BMKT_Lebih,
        CombineKey: inputNpt.CAR+inputNpt.ResKd
    }
    return newNpt;
}

module.exports = {
queryNpt
}