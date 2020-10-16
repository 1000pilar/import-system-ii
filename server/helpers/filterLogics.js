
 function commodityFilter(HsNo){
    var hsCode = HsNo;
    var hsCode4 = hsCode.slice(0, 4);
    var hsCode6 = hsCode.slice(0, 6);
    if(hsCode6 == '870120' || hsCode4 == '8702' || hsCode4 == '8703' || hsCode4 == '8704' || hsCode4 == '8705'){
        return {commodity: 'CBU 4W'}
    } else if(hsCode4 == '8711'){
        return {commodity: 'CBU 2W'}
    } else if(hsCode6 == '840721'){
        return {commodity: 'CBU OBM'}
    } else{
        return {commodity: 'SPAREPART'}
    }
}


function filterCbuType(BrgUrai){
    var CountbalenoMt = 0;
    var CountbalenoAt = 0;
    var CountIgnisGlMt =0;
    var CountIgnisGlAt =0;
    var CountIgnisGxMt =0;
    var CountIgnisGxAt =0;
    var CountJimnyGxMt =0;
    var CountJimnyGxAt =0;

    for (i=0;i<BrgUrai.length;i++){
        
        var balenoMt = BrgUrai.match(/1M1FS\s?\/?\s?[a-z]*?\s?\/?\s?M\s?\/?T/g)
        var balenoAt = BrgUrai.match(/1M1FS\s?\/?\s?[a-z]*?\s?\/?\s?A\s?\/?T/g)
        var IgnisGlMt = BrgUrai.match(/TM2FL\s?\/?\s?[a-z]*?\s?\/?\s?M\s?\/?T/g)
        var IgnisGlAt = BrgUrai.match(/TM2FL\s?\/?\s?[a-z]*?\s?\/?\s?A\s?\/?T/g)
        var IgnisGxMt = BrgUrai.match(/TM2FX\s?\/?\s?[a-z]*?\s?\/?\s?M\s?\/?T/g)
        var IgnisGxAt = BrgUrai.match(/TM2FX\s?\/?\s?[a-z]*?\s?\/?\s?A\s?\/?T/g)
        var JimnyGxMt = BrgUrai.match(/TM2FX\s?\/?\s?[a-z]*?\s?\/?\s?M\s?\/?T/g)
        var JimnyGxAt = BrgUrai.match(/TM2FX\s?\/?\s?[a-z]*?\s?\/?\s?A\s?\/?T/g)
        
        
        
        if(balenoMt.length > 0){
            CountbalenoMt++
        } else if(balenoAt.length > 0){
            CountbalenoAt++
        } else if(IgnisGlMt.length > 0){
            CountIgnisGlMt++
        } else if(IgnisGlAt.length > 0){
            CountIgnisGlAt++
        } else if(IgnisGxMt.length > 0){
            CountIgnisGxMt++
        } else if(IgnisGxAt.length > 0){
            CountIgnisGxAt++
        } else if(balenoAt.length > 0){
            CountbalenoAt++
        }
    }
    var cbuType ={
        BalenoMT: CountbalenoMt,
        BalenoAT: CountbalenoAt,
        IgnisGlMT: CountIgnisGlMt,
        IgnisGlAT: CountIgnisGlAt,
        IgnisGxMT: CountIgnisGxMt,
        IgnisGxAT: CountIgnisGlAt,

    }
    return cbuType
}

module.exports ={
    commodityFilter,
    filterCbuType
}
