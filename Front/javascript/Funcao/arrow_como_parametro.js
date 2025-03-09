function Carro() {
    this.velocidade = 0;

    setInterval(() => {
        this.velocidade+=10;
        console.log(this.velocidade);
    }, 1000);
}

new Carro;