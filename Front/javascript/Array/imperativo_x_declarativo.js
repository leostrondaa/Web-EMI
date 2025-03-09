const alunos = [
    { nome: 'Agatha', nota: 9.3 },
    { nome: 'Daniel', nota: 7.2 },
    { nome: 'Heloisa', nota: 8.8 },
]

// Imperativo
let total = 0;
for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota;
}
console.log((total / alunos.length).toFixed(2));

// Declarativo
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;

total = alunos.map(getNota).reduce(soma);
console.log((total / alunos.length).toFixed(2));