function getStatus(imc) {

    if(isNaN(imc)) return "INDEFINIDO";
    else if(imc < 18.5) 
        return "MAGREZA";
    else if(imc < 25) 
        return "NORMAL";
    else if(imc < 30) 
        return "SOBREPESO";
    else if(imc < 40) 
        return "OBESIDADE";
    else 
        return "OBESIDADE GRAVE";
}

function getIMC(altura, peso) {

    const imc = peso / (altura*altura);
    let ret = {
        imc: imc.toFixed(2),
        msg: getStatus(imc)
    };

    return ret;
}

console.log(getIMC(1.70, 61.5));
console.log(getIMC(1.70));
console.log(getIMC());
console.log(getIMC(1.80, 135.7, 0, 10, 19));
console.log(getIMC(1.65, 95.4));
console.log(getIMC(1.80, 45.4));