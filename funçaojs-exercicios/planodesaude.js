function calcularValorPlanoSaude(idade) {
    const valorBase = 100;
    let adicional;

    if (idade < 10) {
        adicional = 80;
    } else if (idade >= 10 && idade <= 30) {
        adicional = 50;
    } else if (idade > 30 && idade <= 60) {
        adicional = 95;
    } else {
        adicional = 130;
    }

    const valorTotal = valorBase + adicional;
    return valorTotal;
}

console.log(calcularValorPlanoSaude(80));
console.log(calcularValorPlanoSaude(9));
console.log(calcularValorPlanoSaude(29));
console.log(calcularValorPlanoSaude(50));
console.log(calcularValorPlanoSaude(70));
