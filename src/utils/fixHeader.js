function fixHeader() {
    const header = document.querySelector('.header')
    const observer = new IntersectionObserver((entries) => {
        entries[0].isIntersecting ? header.classList.remove('header-fixed') : header.classList.add('header-fixed')
    })
    const firstProductPicture = document.querySelector('.observer')
    observer.observe(firstProductPicture)
}
export {fixHeader}