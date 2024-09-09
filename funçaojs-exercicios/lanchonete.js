function lanchonete(codigo,quantidade, valor){

    switch (codigo){   
        case 100:
            valor = 3.00
            var final = valor * quantidade
            console.log(`O cachorro quente custa R$${valor} vc pediu ${quantidade} dando o total de R$${final}`);
            
        break
        case 200:
            valor = 4.00
            var final = valor * quantidade
            console.log(`O Hambúrguer Simples custa R$${valor} vc pediu ${quantidade} dando o total de R$${final}`);
        break
        case 300:
            valor = 5.50
            var final = valor * quantidade
            console.log(`O Cheeseburguer custa R$${valor} vc pediu ${quantidade} dando o total de R$${final}`);
        break
        case 400:
            valor =  7.50
            var final = valor * quantidade
            console.log(`O Bauru custa R$${valor} vc pediu ${quantidade} dando o total de R$${final}`);
        break
        case 500:
            valor = 3.50
            var final = valor * quantidade
            console.log(`O Refrigerante custa R$${valor} vc pediu ${quantidade} dando o total de R$${final}`);
        break
        case 600:
            valor = 2.80
            var final = valor * quantidade
            console.log(`O Suco custa R$${valor} vc pediu ${quantidade} dando o total de R$${final}`);
        break
        default:
            console.log('produto nao existente');
            
    }
   
}

lanchonete (100,2)
lanchonete (200,2)
lanchonete (300,2)
lanchonete (400,2)
lanchonete (500,2)
lanchonete (600,2)
lanchonete (700,2)