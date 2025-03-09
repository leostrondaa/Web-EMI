const arr = [1, 2, 3, 4, 5];
arr.forEach((item) => console.log(item));

const parImpar = function(item) {
    if(item%2 == 0) console.log("PAR");
    else console.log("ÍMPAR");
}
arr.forEach(parImpar);
