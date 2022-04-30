const isIntersecting = (entry) => {
    return entry.isIntersecting
}
const loadImages = (entry) => {
    const image = entry.target
    const url = image.dataset.src
    image.src = url
    observer.unobserve(image)
}
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImages)
})

const registerImageObserver = (image) => {
    observer.observe(image)
}
export {registerImageObserver}