const API = process.env.API

const getProducts = () => {
    return fetch(`${API}?offset=10&limit=30`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => error)
}
export {getProducts}
