function aleatorio([ min = 1, max = 60]) {
    const valor = (Math.random() * (max - min)) + min;
    return Math.floor(valor);
}

const arr = [10, 20];
console.log(aleatorio(arr));
console.log(aleatorio([55]));
console.log(aleatorio([, 5]));
console.log(aleatorio([]));