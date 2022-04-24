function fixHeader() {
    const header = document.querySelector('.header')
    let firstTime = true
    const observer = new IntersectionObserver((entries) => {
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
    const firstProductPicture = document.querySelector('.observer')
    observer.observe(firstProductPicture)
}
export {fixHeader}