// Notação Literal
const obj = {};
console.log(obj);

// Object em JS
const obj1 = new Object;
console.log(obj1);

// Função Construtora
function Carro(modelo, preco, desconto) {
    this.modelo = modelo;
    this.getPreco = () => {
        return preco * (1 - desconto);
    }
}

const c1 = new Carro('Gol', 85600, 0.15);
const c2 = new Carro('Camaro', 535000, 0.2);
console.log(c1.getPreco(), c2.getPreco());

// Função Factory
function Aluno(nome, notas) {
    return {
        nome,
        notas,
        getMedia() {
            let soma = 0;
            notas.forEach( element => soma+=element );
            return (soma/4).toFixed(1);
        }
        
    }
}

const a1 = Aluno('Marcelo', [4.5, 6.8, 7.9, 9.1]);
const a2 = Aluno('Verônica', [6.1, 7.2, 6.0, 9.8]);
console.log(a1.getMedia(), a2.getMedia());

// Object.create
/*  O método Object.create() cria um novo objeto, 
    utilizando um outro objeto existente como 
    protótipo para o novo objeto a ser criado.
*/
const pessoa = Object.create(null);
pessoa.nome = 'Carla';
console.log(pessoa);
const a3 = Object.create(c1);
console.log(a3);
console.log(a3.getPreco());