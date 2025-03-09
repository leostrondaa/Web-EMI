
const pessoa = {
    nome: 'Carlos',
    idade: 12,
    endereco: {
        logradouro: 'Rua Santos Dummont',
        numero: 984
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, feliz = true } = pessoa;
console.log(sobrenome, feliz);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);
