const alunos = ['Agatha', 'Daniel', 'Heloisa', 'Nathan'];

alunos.forEach(function(nome, indice) {
    console.log(`(${indice + 1}) ${nome}`);
})

alunos.forEach(nome => console.log(nome));

function print(nome) { console.log(nome); }
// const print = nome => console.log(nome);

alunos.forEach(print);