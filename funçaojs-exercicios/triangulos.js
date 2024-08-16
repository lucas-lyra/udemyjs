function triangulo (par1=0,par2=0,par3=0){

if (par1 == par2 && par2 == par3){
    return 'Equilátero'
    
} else if ( par1 == par2 && par2!= par3){
    return 'Isósceles'
    
}else{
    return 'Escaleno'
}

}

console.log(triangulo(1,1,1));
console.log(triangulo(1,1,2));
console.log(triangulo(1,2,3));




