function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}
console.log(calcularValor(13 , 200));
console.log(calcularValor(10 , 200));
console.log(calcularValor(2 , 200));
console.log(calcularValor(3 , 200));
