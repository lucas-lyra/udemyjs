 const soma = function(x,y){
    return x + y
 }


 const impResult = function (a, b , operaçao = soma){
    console.log(operaçao(a,b));
 }

 impResult(3,4)
 impResult(3,4,soma)
 impResult(3,4,function(x,y){
    return x - y
 })
 impResult(3,4,(x,y)=>x * y)


 const pessoa ={
    falar: function (){
        console.log('opa');
    }
 }
 pessoa.falar()