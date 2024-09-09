function sacardinheiro(saque){
    let cedula100 = 0
    let cedula50 = 0
    let cedula10 = 0
    let cedula5 = 0
    let cedula1 = 0
    let valnota = calcularvalnota(saque)
    while (saque >= valnota ){
        switch(valnota){
            case 100:
                saque -= 100
                cedula100++
                break;
            case 50 :
                saque -=50
                cedula50++
                break;
            case 10 :
                saque -=10
                cedula10++
                break;
            case 5  :
                saque -=5
                cedula5++
                break;
            case 1  :
                saque -=1
                cedula1++
                break
        }
        valnota = calcularvalnota(saque)
    }
    return resultelab(cedula1,cedula5,cedula10,cedula50,cedula100)
}

function calcularvalnota(saque){
    if(saque >= 100){
        return 100
    }else if(saque >= 50){
        return 50
    }else if (saque >= 10){
        return 10
    }else if (saque >= 5){
        return 5
    }else if (saque >= 1){
        return 1
    }
}
function resultelab (cedula1,cedula5,cedula10,cedula50,cedula100){
    let resultado = ''

    if (cedula1 > 0){
        resultado += `${cedula1} nota(s) de r$ 1.`
    }
    if (cedula5 > 0){
        resultado += `${cedula5} nota(s) de r$ 5.`
    }
    if (cedula10 > 0){
        resultado += `${cedula10} nota(s) de r$ 10.`
    }
    if (cedula50 > 0){
        resultado += `${cedula50} nota(s) de r$ 50.`
    }
    if (cedula100 > 0){
        resultado += `${cedula100} nota(s) de r$ 100.`
    }
    return resultado
}
console.log(sacardinheiro(18));
console.log(sacardinheiro(29));
console.log(sacardinheiro(170));
console.log(sacardinheiro(45));
console.log(sacardinheiro(200));
