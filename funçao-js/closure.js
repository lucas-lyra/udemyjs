// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora (){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhafunçao = fora()
console.log(minhafunçao());
