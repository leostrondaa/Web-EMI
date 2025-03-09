class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class Financeiro {

    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    // '...' operador spread, útil quando queremos passar 
    // um número variado de argumentos, ou seja, os elementos 
    // individuais do array serão passados como argumentos 
    // separados para a função
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valor = 0;
        this.lancamentos.forEach(l => {
            valor += l.valor;
        })
        return valor;
    }
}

const salario = new Lancamento('Salario', 15000);
const cartao = new Lancamento('Fatura Cartão', -5500);

const contas = new Financeiro(6, 2018);
contas.addLancamentos(salario, cartao);
console.log(contas.sumario());