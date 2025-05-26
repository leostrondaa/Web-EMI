const myPromise = new Promise((resolve, reject) => {
  // Simulando uma operação assíncrona
  setTimeout(() => {
    resolve('Operação concluída com sucesso!');
  }, 2000);
});

myPromise.then((resultado) => {
  console.log("Sucesso:", resultado);
}).catch((erro) => {
  console.log("Erro:", erro);
});

console.log('Código Continua...')