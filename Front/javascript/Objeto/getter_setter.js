const primary = {
    _id: 1, // Convenção: '_' Indica Acesso Interno
    get id() { return this._id++ },
    set id(newId) { 
        if(newId > this._id) {
            this._id = newId;
        }
    }
}
// Método "get"" é invocado no momento da leitura
console.log(primary.id, primary.id);
// Método "set"" é invocado no momento da atribuição
primary.id = 20;
console.log(primary.id, primary.id);
primary.valor = 10;
console.log(primary.id, primary.id);