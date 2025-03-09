const v1 = 1.0;
const v2 = Number('2.5'); // Construtor
const valor = 9.875;

console.log(v1, v2);
console.log(Number.isInteger(v1));
console.log(Number.isInteger(v2));

const total = (valor * v1) / (v1 + v2);
// Variáveis e constantes possuem métodos vinculados
console.log(total.toFixed(2));
console.log(total.toString(2)); // Binário
console.log(typeof total); 
console.log(typeof Number);