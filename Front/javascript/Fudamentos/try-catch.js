function handleError(e) {
    // throw 10;
    // throw true;
    // throw 'mensagem';
    throw {
        nome: e.name,
        msg: e.message,
        date: new Date
    }
}

function printName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        // console.log(e.message);
        handleError(e);
    } finally {
        console.log('Terminou!!');
    }
}

const pessoa = { nome: 'Carlos Eduardo' };
printName(pessoa);