const parImpar = function (x) {
    if(x%2 == 0)
        return "PAR";

    return "ÍMPAR";
}
const fatorial = function (x) {
    let fat = 1;
    for(let i=2; i<=x; i++) fat *= i;
    return fat;
}

const print = function (a, operacao = parImpar) {
    console.log(operacao(a));
}

print(4);
print(7);
print(3, fatorial);
print(5, fatorial);
print(8, function(a) { return a * a; } );
print(10, (a) => a + a);


const atleta = {
    correr: function() { console.log('Running...') } ,
    parar: () => console.log('Stoping...')
}

atleta.correr();
atleta.parar();