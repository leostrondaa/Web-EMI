const mae = { nome: 'Carolina', cabelo: 'Loiro' };

const filhaA = Object.create(mae);
filhaA.nome = 'Aline';
console.log(filhaA.cabelo);
filhaA.cabelo = 'Ruivo';
console.log(`${filhaA.nome} tem cabelo ${filhaA.cabelo}`);

const filhaS = Object.create(mae, {
    nome: { value: 'Sônia', writable: false, enumerable: true }
});

console.log(filhaS.nome);
filhaS.nome = 'Sabrina';
console.log(`${filhaS.nome} tem cabelo ${filhaS.cabelo}`);

console.log("Propriedades Genuínas");
console.log(Object.keys(filhaA));
console.log(Object.keys(filhaS));

console.log("Todas as Propriedades");
for(let key in filhaS) {
    filhaS.hasOwnProperty(key) 
    ?
        // Propriedade Genuína
        console.log(`[Genuino]: ${key}`)
    : 
        // Propriedade Herdada
        console.log(`[Herdado]: ${key}`)
} 