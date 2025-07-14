import axios from 'axios';

const Client = axios.create({
    // Exemplo de URL base
    baseURL: 'http://localhost:8080/api', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default Client;