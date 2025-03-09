let area = function (raio) {
    return Math.PI * Math.pow(raio, 2);
}
console.log(area(4.25));

dobro = (raio) => {
    return Math.PI * Math.pow(raio, 2);
}
console.log(area(4.25));

dobro = raio => Math.PI * Math.pow(raio, 2); // return implícito
console.log(area(4.25));

let mensagem = function () {
    return 'Olá Mundo!'
}
console.log(mensagem());

mensagem = () => 'Olá Mundo!'
console.log(mensagem());