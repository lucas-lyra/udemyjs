const fabricantes = ["mercedes", "Audi","bmw"]

function imprimir (nome, indice){
    console.log(`${indice + 1}.${nome}`);
    
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes=>console.log(fabricantes))