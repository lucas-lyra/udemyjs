function carro(velmax=200, delta = 5){
//atributo privado 
let velatual = 0
//metodo publico 

this.acelerar = function(){
    if(velatual + delta <= velmax){
        velatual += delta
    }else{
        velatual = velmax
    }
  }
  //metodo publico 
  this.getveltual = function(){
    return velatual
  }
}

const uno = new carro
uno.acelerar()
console.log(uno.getveltual());
const ferrari = new carro (350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getveltual());


