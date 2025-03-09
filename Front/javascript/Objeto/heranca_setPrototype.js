const auto = {
    vel: 0,
    velMax: 200,

    addVel(ac) {
        if (this.vel + ac <= this.velMax) {
            this.vel += ac;
        } else {
            this.vel = this.velMax;
        }
    },
    getStatus() {
        return `${this.vel}Km/h de ${this.velMax}Km/h`;
    }
}

const carro = {
    marca: 'Ferrari',
    modelo: 'Testarossa',
    velMax: 345 // Sombramento (shadowing)
}

const moto = {
    marca: 'Royal Enfield',
    modelo: 'Meteoro 350',
    getStatus() {
        return `${this.marca} - ${this.modelo}: ${super.getStatus()}`;
    }
}
// Configura o 'prototype' para 'auto'
Object.setPrototypeOf(carro, auto);
Object.setPrototypeOf(moto, auto);

console.log(carro);
console.log(carro.__proto__);
console.log(moto);
console.log(moto.__proto__);

moto.addVel(100);
console.log(moto.getStatus());

carro.addVel(300);
console.log(carro.getStatus());