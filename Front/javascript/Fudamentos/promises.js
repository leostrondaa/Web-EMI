const myPromise = new Promise((resolve, reject) => {
  // Simulando uma operação assíncrona
  setTimeout(() => {
    resolve('Operação concluída com sucesso!');
  }, 2000);
});

