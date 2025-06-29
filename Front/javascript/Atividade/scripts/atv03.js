
function ex03() {
    
    const form = document.querySelector('#form03')
    const input = form.querySelector('input[name="in_03"]').value
    const array = input.split(' ');
    resolve03(...array)
    form.reset()
}

function resolve03(...rest) {

    let txt = "";
    let resp = rest.map(isEven)

    resp.forEach((v) => txt += v + "<br>") 
    
    const saida = document.querySelector('#output')
    saida.innerHTML = txt
}

function isEven(val) {

    if(val%2 == 0) return "PAR"

    return "ÍMPAR"
}


