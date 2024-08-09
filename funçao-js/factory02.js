function produto (nome, preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}

console.log(produto('notebook',2199.49));
console.log(produto('ipad',1199.49));
