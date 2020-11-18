
const s1 = document.querySelector('#first')
const s2 = document.querySelector('#works')
const s3 = document.querySelector('#about')

const spans = document.querySelectorAll('span')
const logo = document.querySelector('.header__logo')

window.addEventListener('scroll', () => {
  spans.forEach(el => {
      if (el.getBoundingClientRect().top + window.pageYOffset < s2.offsetTop) {
          el.classList.remove('header__span--2')
          el.classList.remove('header__span--3')
      } else if (el.getBoundingClientRect().top + window.pageYOffset > s2.offsetTop && el.getBoundingClientRect().top + window.pageYOffset < s3.offsetTop) {
          el.classList.add('header__span--2')
          el.classList.remove('header__span--3')
      } else if (el.getBoundingClientRect().top + window.pageYOffset > s3.offsetTop) {
          el.classList.remove('header__span--2')
          el.classList.add('header__span--3')
      }
  })
  if (logo.getBoundingClientRect().top + window.pageYOffset < s2.offsetTop) {
    logo.classList.remove('header__logo--works')
    logo.classList.remove('header__logo--about')
} else if (logo.getBoundingClientRect().top + window.pageYOffset > s2.offsetTop && logo.getBoundingClientRect().top + window.pageYOffset < s3.offsetTop) {
    logo.classList.add('header__logo--works')
    logo.classList.remove('header__logo--about')
} else if (logo.getBoundingClientRect().top + window.pageYOffset > s3.offsetTop) {
    logo.classList.remove('header__logo--works')
    logo.classList.add('header__logo--about')
}
})