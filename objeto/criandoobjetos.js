//usando a notação literal

const obj1 ={}
console.log(obj1);
// object em js

console.log(typeof Object,typeof new Object);
const obj2 = new Object
console.log(obj2);


// funçao costrutora 

function produto (nome, preço ,desc){
    this.nome = nome 
    this.getprecocomdesconto = () =>{
        return preço *(1-desc)
    }
}

const p1 = new produto('caneta', 7.99,0.15)
const p2 = new produto('notebok', 2998.99,0.25)
console.log(p1.getprecocomdesconto(),p2.getprecocomdesconto());

//funçao factory

function criarFuncionario ( nome, salariobase, faltas){
    return{
        nome,
        salariobase,
        faltas,
        getSalario(){
            return(salariobase/30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario ('Joao', 7980,4)
const f2 = criarFuncionario ('Maria', 11400,1)
console.log(f1.getSalario(),f2.getSalario());

//object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha);

// uma funçao famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info);






