function mediaaluno (notas){
    let resumo =aredondar(notas)
    if( resumo >= 40){
         console.log(
        `aluno passou com ${resumo} na media.`)
    }else {
         console.log(
        `aluno repovado com ${resumo} na media. `)
    }
    
}
function aredondar (nota){
    if (nota % 5 > 2){
        return nota + (5 - (nota%5) )
    }else{
        return nota
    }
}

mediaaluno(100)
mediaaluno(30)
mediaaluno(38)
mediaaluno(40)
mediaaluno(20)
mediaaluno(88)
mediaaluno(61)

