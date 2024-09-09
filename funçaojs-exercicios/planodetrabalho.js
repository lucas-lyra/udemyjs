function trabalho ( acordo,salario ){
    switch (acordo) { 
        case 'A' :
            console.log(salario * 1.1);
            break
        case 'B':
            console.log(salario *1.15);
            break;
        case 'C':
            console.log(salario *1.2);
            break;
            default:
                console.log('plano invalido');         

    }
}

trabalho('A',1000)
trabalho('B',1000)
trabalho('C',1000)
trabalho('D',1000)