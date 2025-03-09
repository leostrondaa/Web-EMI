class Aluno {

    constructor(nome, turma, ano) {
        this.nome = nome;
        this.turma = turma;
        this.ano = ano;
    }

    info() {
        console.log(this.nome + "(" + this.turma + (this.ano%100).toFixed(0) + ")");
    }
}

const a1 = new Aluno('Marcos', 'MEC', 2020);
a1.info();

const criarAluno = (nome, turma, ano) => {
    return {
        info: () => console.log(nome + "(" + turma + (ano%100).toFixed(0) + ")")
    }
} 

const a2 = criarAluno('Carol', 'INFO', 2024);
a2.info();

