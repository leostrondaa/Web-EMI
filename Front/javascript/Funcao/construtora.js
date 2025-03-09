function Carro(velMax = 200, delta = 5) {
    // Atributo privado
    let vel = 0;

    // Método publico (this)
    this.acelerar = function () {
        if (vel + delta <= velMax) 
            vel += delta;
        else
            vel = velMax;
    }

    // Metodo publico (this)
    this.getVel = function () {
        return vel;
    }
}

const gol = new Carro;
gol.acelerar();
console.log(gol.getVel() + " km/h");

const abarth = new Carro(350, 40);
abarth.acelerar();
abarth.acelerar();
abarth.acelerar();
console.log(abarth.getVel() + " km/h");

console.log(typeof Carro);
console.log(typeof abarth);
