const API = process.env.API
const OFFSET = process.env.OFFSET

const fetchProducts = () => {
    fetch(`${API}${OFFSET}`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Fetching Error', error))
}
export {fetchProducts}
