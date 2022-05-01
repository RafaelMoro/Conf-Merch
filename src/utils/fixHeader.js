const observer = new IntersectionObserver((entries) => {
    const header = document.querySelector('.header')
    let firstTime = true
    if(entries[0].isIntersecting) {
        header.classList.remove('header-fixed', 'fadeInDownBig')
        if(!firstTime) {
            header.classList.add('fadeInDown')
            setTimeout(() => header.classList.remove('fadeInDown'), 1000)
        }
    }else {
        header.classList.remove('fadeOutUpBig')
        header.classList.add('header-fixed','fadeInDownBig')
        firstTime = false
    }
})
function fixHeader(element) {
    observer.observe(element)
}
function unFixHeader(element) {
    if(header.className.includes('header-fixed')) {
        header.classList.remove('header-fixed', 'fadeInDownBig')
    }
    observer.unobserve(element)
}
export {fixHeader, unFixHeader}