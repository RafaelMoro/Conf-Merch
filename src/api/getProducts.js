const API = process.env.API

const getProducts = async () => {
    try {
        const response = await fetch(`${API}?offset=10&limit=30`)
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}
export { getProducts }
