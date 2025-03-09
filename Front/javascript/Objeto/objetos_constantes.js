const pessoa = { nome: 'Paula' };
pessoa.nome = 'Maria';
pessoa.end = 'Rua XV de Novembro, 211';
console.log(pessoa);
// Congela o Objeto (não permite modificação)
Object.freeze(pessoa);

pessoa.nome = 'Camila';
pessoa.end = 'Av. Xavier da Silva, 450';
delete pessoa.nome;

console.log(pessoa.nome)
console.log(pessoa)

// Cria o Objeto, já Congelado
const constPessoa = Object.freeze({ nome: 'Paula' });
constPessoa.nome = 'Maria';
console.log(constPessoa);