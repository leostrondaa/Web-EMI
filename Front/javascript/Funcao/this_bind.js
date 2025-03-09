const carro = {
    velocidade: 0,
    getVelocidade() {
        console.log(this.velocidade);
    }
};

carro.getVelocidade();
carro.getVelocidade();
const v = carro.getVelocidade;
v(); // Conflito entre paradigmas: funcional e OO

// Função bind() - permite especficar o contexto do this
const vel = carro.getVelocidade.bind(carro);
vel();