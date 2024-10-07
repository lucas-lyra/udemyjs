// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa -> 456 -> {...}

//pessoa = { nome: 'Ana'}
Object.freeze (pessoa)

pessoa.nome =  'Maria'
pessoa.end =  'rua ABC'
delete pessoa.nome

console.log(pessoa.nome);
console.log(pessoa);

const pessoaCostante = Object.freeze({nome: 'Joao'})
pessoaCostante.nome = 'Adalberto '
console.log(pessoaCostante);


