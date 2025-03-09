const produtos = [
    { nome: 'Sofá', preco: 3200, fragil: false },
    { nome: 'iPhone', preco: 8999, fragil: true },
    { nome: 'Taça de Cristal', preco: 12.49, fragil: true },
    { nome: 'Garrafa Pet', preco: 3.99, fragil: false }
]

console.log(
    produtos.filter(function(p) {
        return false;
    })
)

const preco = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(preco).filter(fragil));