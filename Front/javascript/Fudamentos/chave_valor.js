// chave / valor
const cumprimento = 'Oi'; // contexto/escopo léxico 1

function exec() {
    const cumprimento = 'Olá'; // contexto/escopo léxico 2
    return cumprimento;
}

// Objetos: grupos de chave / valor
const pessoa = {
    nome: 'Mariana',
    idade: 41,
    peso: 65,
    endereco: {
        logradouro: 'Rua Santa Catarina',
        numero: 427
    }
}

console.log(cumprimento);
console.log(exec());
console.log(pessoa);