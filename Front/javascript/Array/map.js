const numeros = [1, 2, 3, 4, 5];

// Laço com propósito
let resultado = numeros.map(function(item) {
    return item * 2;
})

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const convert = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(convert);
console.log(resultado);