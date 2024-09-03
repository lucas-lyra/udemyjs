function calcular (a,b,c){ 
    switch(b){ 
        case '+':  
            console.log(a + c);
            break;
         case '-':
            console.log(a -c);
            break;
         case '*':
            console.log(a*c);
            break;
         case '/':  
            console.log(a/c);
            break; 
    }
}

calcular(2,'+',3)
calcular(2,'-',3)
calcular(2,'*',3)
calcular(2,'/',3)

