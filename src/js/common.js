import './modules/typeWriter'
import './modules/socCube'
import './modules/menuColors'
import './modules/headers'
import './modules/scroll'


import Swiper from 'swiper'
import data from './data'

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 1,
    centeredSlides: true
})

const titles = document.querySelectorAll('.title')
const slidesAll = document.querySelectorAll('.swiper-slide')
const header = document.querySelector('.content__header')
const text = document.querySelector('.content__text')

swiper.on('slideChange', () => {
    titles.forEach(el => {
        el.classList.remove('sub-sub-sub-active', 'sub-sub-active', 'sub-active', 'active', 'pre', 'pre-pre', 'pre-pre-pre')
    })
    slidesAll.forEach(el => el.classList.remove('sw-act'))
    titles[swiper.activeIndex].classList.add('active')

    titles[swiper.activeIndex - 1] && titles[swiper.activeIndex - 1].classList.add('sub-active', 'pre')
    titles[swiper.activeIndex + 1] && titles[swiper.activeIndex + 1].classList.add('sub-active')

    titles[swiper.activeIndex - 2] && titles[swiper.activeIndex - 2].classList.add('sub-sub-active', 'pre-pre')
    titles[swiper.activeIndex + 2] && titles[swiper.activeIndex + 2].classList.add('sub-sub-active')

    titles[swiper.activeIndex - 3] && titles[swiper.activeIndex - 3].classList.add('sub-sub-sub-active', 'pre-pre-pre')
    titles[swiper.activeIndex + 3] && titles[swiper.activeIndex + 3].classList.add('sub-sub-sub-active')
        //content rm opened
        //textcontent = ''

})
document.querySelectorAll('.swiper-slide').forEach(el => {
    const header = document.querySelector('.content__header')
    const content  = document.querySelector('.content')
    el.addEventListener('click', (e) => {
        if (el.classList.contains('swiper-slide-active') || el.closest('swiper-slide-active')) {
            el.classList.toggle('sw-act')
            content.classList.toggle('content--opened')
            header.textContent = data[swiper.activeIndex].title
            //text.textContent = data[swiper.activeIndex].a
        }
    })
})

// btn 

//counter in circle