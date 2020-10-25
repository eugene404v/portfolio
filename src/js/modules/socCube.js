const cube = document.querySelector('.cube')
const leftSide = document.querySelector('.left')
const frontSide = document.querySelector('.front')
const bottomSide = document.querySelector('.bottom')

leftSide.addEventListener('mouseover', () => {
    cube.classList.add('lefted')
})
leftSide.addEventListener('mouseout', () => {
    cube.classList.remove('lefted')
})

frontSide.addEventListener('mouseover', () => {
    cube.classList.add('fronted')
})
frontSide.addEventListener('mouseout', () => {
    cube.classList.remove('fronted')
})

bottomSide.addEventListener('mouseover', () => {
    cube.classList.add('bottomed')
})
bottomSide.addEventListener('mouseout', () => {
    cube.classList.remove('bottomed')
})