const generateRandomNumber = () => {
    const random_number = Math.random()
    return Math.floor(random_number*100000000)
}
console.log(generateRandomNumber())
export {generateRandomNumber}