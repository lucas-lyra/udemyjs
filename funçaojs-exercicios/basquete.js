let jogos = "30,50,20,3,6,8,10,90,23,14"


function avpuntuaçao (jogos){
    let pontuacoes = jogos.split(", ")
    let record = 0
    let jogpior = 1
    let pontmaior = pontuacoes[0]
    let pontmenor = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length;i++){
        if(parent(pontuacoes[i])> parseInt(pontmaior)){
            pontmaior = pontuacoes[i]
            record++
        }else if (parseInt(pontuacoes[i])< parseInt(pontmenor)){
            pontmenor = pontuacoes[i]
            jogpior = i+1;
        }
    }
    return[record,jogpior]
}
console.log(avpuntuaçao(jogos));
