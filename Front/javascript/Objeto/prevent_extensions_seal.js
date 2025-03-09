// Object.preventExtensions
// Não permite adicionar atributos
const aluno = Object.preventExtensions({
    nome: 'Marcelo', curso: 'INFO', turma: 2023
});
console.log('Extensível:', Object.isExtensible(aluno));

aluno.nome = 'Marina';
aluno.email = 'marina@gmail.com';
console.log(aluno);
delete aluno.turma;
console.log(aluno);

// Object.seal
// Não permite adicionar/remover atributos
const professor = { nome: 'Luccas', idade: 24 };
Object.seal(professor);
console.log('Selado:', Object.isSealed(professor));

professor.sobrenome = 'Kayure';
console.log(professor);
delete professor.nome;
professor.idade = 28;
console.log(professor);

// Object.freeze => selado + valores constantes