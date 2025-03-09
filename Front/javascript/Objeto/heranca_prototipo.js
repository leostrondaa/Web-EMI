const INFO = {
    nome: 'Médio Integrado - Informática',
    tempo: 4
}

console.log(INFO.prototype);
console.log(Object.prototype);

/*
    O atributo "__proto__" permite acessar o protótipo 
    do objeto ferrari, ou seja, a referência utilizada
    para criar o objeto ferrari, similar a uma classe pai
*/ 
console.log(INFO.__proto__);

// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'P', attr3: '3' }
const filho = { __proto__: pai, attr3: 'F' }
console.log(filho.attr1, filho.attr2, filho.attr3);
console.log(filho.__proto__.attr3);
