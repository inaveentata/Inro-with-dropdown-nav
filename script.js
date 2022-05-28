const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const navEl = document.querySelector('.nav')
const overlay = document.querySelector('.overlay')


openBtn.addEventListener('click', () => {100%
    navEl.classList.add('show-nav')
    
        overlay.classList.add('show-overlay')
})
closeBtn.addEventListener('click', () => {
    navEl.classList.remove('show-nav')
    overlay.classList.remove('show-overlay')
})


const downArrows = document.querySelectorAll('.down-arrow')
const company = document.querySelector('.company-list')
const features = document.querySelector('.featurs-list')

console.log(downArrows)
downArrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        const element = e.target.parentElement.parentElement
        const sibiling = element.nextElementSibling
        sibiling.classList.toggle('show-list')
        console.log(element)
        console.log(sibiling)

        
    })
})