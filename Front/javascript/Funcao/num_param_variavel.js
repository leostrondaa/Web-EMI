function soma() {
    let soma = 0;
    for(i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(5));
console.log(soma(3.1415, 0, 3.1415));
console.log(soma(1.1, 2.2, "Teste"));
console.log(soma('a', 'b', 'c'));