class pessoa { 
    constructor(nome){
        this.nome = nome
    }

    falar (){
        console.log(`Meu nome é ${this.nome}`);
        
    }
}
const p1 = new pessoa('João')
p1.falar()

const pessoa2 = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
        
    }
}
const p2 =pessoa2('Maria')
p2.falar()