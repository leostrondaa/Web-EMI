async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

async function fetchDataUser() {
  const response = await fetch('https://randomuser.me/api/?results=1000');
  const data = await response.json();
  console.log(data)
}

fetchDataUser()
console.log('Código Continua...')


