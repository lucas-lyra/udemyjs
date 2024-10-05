//coleçao diãmica de pares chave /valor


const produto = new Object
produto.nome = "cadeira"
produto['marca do produto']= 'generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereço: {
            longradouro: ' rua ABC',
            numero: 123
         }
        },
        condutores :[{
            nome:'junior',
            idade: 19
        },{
            nome:'Ana',
            idade:42
        }],
        calcularvalorseguro: function (){
            //.....
        }
    }

carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['longradouro']= 'Av Gigante'
console.log(carro);

delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularvalorseguro
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);


