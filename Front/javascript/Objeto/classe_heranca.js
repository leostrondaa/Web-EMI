class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor(nome="Anônimo") {
        super('Silva');
        this.nome = nome;
    }
}

const filho = new Filho('Manoel');
console.log(filho);