const animateBuyButton = (event) => {
    const id = event.target.id
    const button = document.querySelector(`#${id}`)
    button.classList.add('rubberBand', 'animated')
    setTimeout(() => button.classList.remove('rubberBand', 'animated'), 700)
}
export {animateBuyButton}