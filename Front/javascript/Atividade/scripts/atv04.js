
function ex04() {
    
    const form = document.querySelector('#form04')
    const input = form.querySelector('input[name="in_04"]').value
    const array = input.split(' ');
    // alert(array)
    resolve04(...array)
    form.reset()
}

function resolve04(...rest) {

    const result = rest.filter(filter_perfeito)

    const saida = document.querySelector('#output')
    saida.innerHTML = result.toString().replace(',', ' ')
}

const filter_perfeito = (val) => {

    let soma = 0

    for(let i=1; i<val; i++) {
        if(val%i == 0) soma += i
    }

    return soma == val
}

