const API = process.env.API

const getProducts = () => {
    return fetch(`${API}?offset=10&limit=30`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => error)
}
const getSingleProduct = async(productId) => {
    try {
        const fetchData = await fetch(`${API}/${productId}`)
        const productFetched = await fetchData.json()
        return productFetched
    } catch (error) {
        console.error('Fetching Single Product Error', error)
    }
}
export { getProducts, getSingleProduct }
