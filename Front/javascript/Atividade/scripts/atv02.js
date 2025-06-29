
function ex02() {
    
    const form = document.querySelector('#form02')
    const input = form.querySelector('input[name="in_02"]').value
    const array = input.split(' ');
    resolve02(...array)
    form.reset()
}

function resolve02(...pars) {

    let media = 0
    pars.forEach( (par) => media += parseInt(par));
    media = media / arguments.length

    const saida = document.querySelector('#output')
    saida.textContent = "Media: " + media.toFixed(2) 
}



