function dinheiro (nota){
    nota =`R$ ${nota.toFixed(2).toString().replace(".", ",")}`
    console.log(nota);
    
   
    
    
}
dinheiro(0.1 + 0.2)