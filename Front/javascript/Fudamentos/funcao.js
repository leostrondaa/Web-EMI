// Sem Retorno
function printAdd(a, b) {
    console.log(a + b);
}

printAdd(2, 3);
printAdd(2); // NaN - Not a Number
printAdd(2, 10, 4, 5, 6, 7, 8);
printAdd();  // NaN - Not a Number

// Com Retorno
function add(a, b = 1) {
    return a + b;
}

console.log(add(2, 3));
console.log(add(2));
console.log(add());