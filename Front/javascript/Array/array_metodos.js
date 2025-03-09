const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
// O piloto, na última posição, abandonou a corrida!
pilotos.pop(); 
console.log(pilotos);

// Entrou na corrida, na última posição
pilotos.push('Verstappen'); 
console.log(pilotos);

// O piloto, na primeira posição, abandonou a corrida!
pilotos.shift(); 
console.log(pilotos);

// Entrou na corrida, na primeira posição
pilotos.unshift('Hamilton'); 
console.log(pilotos);

// Método splice pode adicionar e remover elementos
// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Remover
pilotos.splice(3, 1);
console.log(pilotos);

// novo array
const pilotos_new = pilotos.slice(2);
console.log(pilotos_new);

const new_pilotos = pilotos.slice(1, 4);
console.log(new_pilotos);