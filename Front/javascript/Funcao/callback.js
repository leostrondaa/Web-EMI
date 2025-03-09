const carros = ["Kicks", "Pulse", "T-Cross"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

carros.forEach(imprimir);
carros.forEach(nome => console.log(nome));