function aleatorio({ min = 1, max = 60 }) {
    const valor = (Math.random() * (max - min)) + min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(aleatorio(obj));
console.log(aleatorio({ min: 55 }));
console.log(aleatorio({}));
console.log(aleatorio());