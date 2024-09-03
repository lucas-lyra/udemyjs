function concessionária (carro){
    switch(carro){
        case 'hatch':
        console.log('compra feita com sucesso.');
        break;
        case 'honda':
            console.log('tem certeza que não prefere esse modelo?');
            break;
        case 'ferrari':
            console.log('tem certeza que não prefere esse modelo?');
            break;
        case 'BMW':
            console.log('tem certeza que não prefere esse modelo?');
            break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui');
            
        
    }

}

concessionária('hatch')
concessionária('honda')
concessionária('ferrari')
concessionária('BMW')
concessionária('fusca')