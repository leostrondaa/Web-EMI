import axios from 'axios';

const Client = axios.create({
    
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    },
});

export default Client;