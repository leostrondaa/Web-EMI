const alunos = [
    { nome: 'Agatha', nota: 9.3 },
    { nome: 'Daniel', nota: 7.2 },
    { nome: 'Heloisa', nota: 8.8 },
    { nome: 'Nathan', nota: 6.7 }
]

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota)
    .reduce(
        function(acumulador, atual) {
            console.log(acumulador, atual);
            return acumulador + atual;
        }, 
        0
    )

console.log(`Total = ${resultado}`);