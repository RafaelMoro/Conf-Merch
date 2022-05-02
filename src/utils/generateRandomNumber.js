const generateRandomNumber = () => {
    const random_number = Math.random()
    return Math.floor(random_number*10000)
}

export {generateRandomNumber}