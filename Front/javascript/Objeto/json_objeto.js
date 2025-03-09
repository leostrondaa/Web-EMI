const obj = { 
    x: 10, 
    y: 12, 
    z: 14, 
    media() { 
        return (x + y + z)/3; 
    } 
};
// Converter objetos e valores em uma string JSON
console.log(JSON.stringify(obj));
// Convete uma string JSON em um Objeto JavaScript
console.log(JSON.parse('{ "x": 10, "y":12, "z": 14 }'));
console.log(JSON.parse('{ "a": 3.1415, "b": "gil", "c": false, "d": {}, "e": [] }'));