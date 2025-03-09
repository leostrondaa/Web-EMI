// Anonima (Anonimous)
const printAdd = function (a, b) {
    console.log(a + b);
}
printAdd(2, 3);

// Seta (Arrow) - Retorno Explícito
const add = (a, b) => {
    return a + b;
}

console.log(add(2, 3));

// Seta (Arrow) - Retorno Implícito
const sub = (a, b) => a - b;
console.log(sub(2, 3));

const print = a => console.log(a);
print('Arrow Function');