let jogos = "30,50,20,3,6,8,10,90,23,14"

function avpuntuacao(jogos) {
    let pontuacoes = jogos.split(","); 
    let record = 0;
    let jogpior = 1;
    let pontmaior = parseInt(pontuacoes[0]);
    let pontmenor = parseInt(pontuacoes[0]);

    for (let i = 1; i < pontuacoes.length; i++) {
        let pontuacaoAtual = parseInt(pontuacoes[i]);
        if (pontuacaoAtual > pontmaior) {
            pontmaior = pontuacaoAtual;
            record++;
        } else if (pontuacaoAtual < pontmenor) {
            pontmenor = pontuacaoAtual;
            jogpior = i + 1;
        }
    }
    return [record, jogpior];
}

console.log(avpuntuacao(jogos));
