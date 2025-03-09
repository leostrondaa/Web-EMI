const x = 10;
const y = 20;
const z = 30;

const obj1 = { x: x, y: y, z: z };
const obj2 = { x, y, z };
console.log(obj1, obj2)

const propriedade = 'pi';
const valor = 3.1415;

const obj3 = {};
obj3[propriedade] = valor;
console.log(obj3);

const obj4 = {[propriedade]: valor};
console.log(obj4);

const obj5 = {
    f1: function() {
        // ...
    },
    f2() {
        // ...
    }
}
console.log(obj5);