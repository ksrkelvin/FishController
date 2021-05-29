function vendasDinheiro(e){
    let valor = 0
    for( let i of e){
        if ( i.operation === "VENDER"){
            valor += (i.price * i.amount)
        }
    }
    return valor
}

function vendasKg(e){
    let kg = 0
    for (let i of e){
        if( i.operation === "VENDER"){
            kg += (i.amount)
        }
    }
    return kg
}

function comprasDinheiro(e){
    let valor = 0
    for( let i of e){
        if ( i.operation === "COMPRAR"){
            valor += (i.price * i.amount)
        }
    }
    return valor
}

function comprasKg(e){
    let kg = 0
    for (let i of e){
        if( i.operation === "COMPRAR"){
            kg += (i.amount)
        }
    }
    return kg
}

module.exports = {vendasDinheiro, vendasKg, comprasDinheiro, comprasKg}