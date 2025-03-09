let alunos = new Array('Ariane', 'Bruno', 'Cícero');
console.log(alunos);

alunos = ['Ariane', 'Bruno', 'Cícero'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);

alunos[3] = 'Paulo';
console.log(alunos.length);

alunos[9] = 'Rafael';
console.log(alunos.length);
console.log(alunos[8] === undefined);

delete alunos[1];
console.log(alunos[1]);
console.log(alunos[2]);
