function cesta (frutas){
    switch(frutas){
        case 'maça':
         console.log('Não vendemos essa fruta aqui');
            break
        case 'kiwi':
         console.log('estamos com escassez de kiwis');
            break
        case 'melancia':
         console.log('Aqui está, são 3 reais o quilo');
         break
            default:
            console.log('ERRO!!');
            
    }
    
}

cesta('maça')
cesta('kiwi')
cesta('melancia')
cesta('baccon')