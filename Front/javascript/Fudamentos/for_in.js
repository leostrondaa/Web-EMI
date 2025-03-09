// Define um Objeto Aluno
const aluno = { nome: "Carlos", curso: "INFO", turma: 2023 };

for (prop in aluno) {
  console.log("aluno." + prop + " = " + aluno[prop]);
}
