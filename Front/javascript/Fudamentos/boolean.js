let op = false;
console.log(op);

op = true;
console.log(op);

op = 1;
console.log(!!op);

console.log('TRUE:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('FALSE:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(op = false))

console.log('OUTRO:')
console.log(!!('' || null || 0 || ' '))
