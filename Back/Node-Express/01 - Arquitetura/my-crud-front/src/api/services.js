import Client from "./client";

function read(endpoint) {

    let load = []

    Client.get(endpoint).then(res => {
        load = res.data
        console.log(load)
    })
    .catch(function(error) {
        console.log(error)
    });
}

async function create(endpoint, data) {
    return Client.post(endpoint, data);
}

export {
    read,
    create,
}