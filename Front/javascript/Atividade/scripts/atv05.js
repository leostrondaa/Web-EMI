
function ex05() {
    
    const form = document.querySelector('#form05')
    const input = form.querySelector('input[name="in_05"]').value

    const obj = construtora(input)
    resolve05(obj)
    form.reset()
}

function resolve05(obj) {

    let result = ""
    Object.entries(obj).forEach((arr) => {
        result += "" + arr[0] + ": " + arr[1] + "<br>"
    })

    const saida = document.querySelector('#output')
    saida.innerHTML = result
}

function construtora(data) {
    return JSON.parse(data)
}
