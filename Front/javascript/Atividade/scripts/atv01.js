
function ex01() {
    
    const form = document.querySelector('#form01')
    const input = form.querySelector('input[name="in_01"]').value
    const array = input.split(' ');
    resolve01(...array)
    form.reset()
}

function resolve01() {

    let media = 0
    
    for(i in arguments) {
        media += parseInt(arguments[i])
    }
    media = media / arguments.length

    const saida = document.querySelector('#output')
    saida.textContent = "Media: " + media.toFixed(2)
} 



