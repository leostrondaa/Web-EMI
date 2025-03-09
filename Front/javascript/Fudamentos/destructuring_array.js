const [x] = [12];
console.log(x);

const [n1, , n3, , n5, n6 = 0] = [6.5, 7.5, 4.2, 9.7];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 6.7, 8.3], [9.2, 3.7, 8.6]];
console.log(nota);