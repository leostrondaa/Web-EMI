import Client from "./client";

export const getEndpoint = () => {
    return Client.get('/endpoint');
};

export const postEndpoint = (data) => {
    return Client.post('/endpoint', data);
};