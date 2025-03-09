// OBJETO PESSOA
const pessoa = {}
pessoa.nome = 'Maria Eduarda'
pessoa.altura= 1.70
// Indice de Massa Corporal
pessoa['imc'] = pessoa.altura / Math.pow(pessoa.altura, 2);

console.log(pessoa)

// OBJETO CIDADE
const cidade = {
    nome: 'Paranaguá',
    habitantes: 183.450
}

console.log(cidade)