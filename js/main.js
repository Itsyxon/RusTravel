const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-active')
})

const modalWindow = document.querySelector('.modal')

const openModal = document.querySelectorAll('.single__button')
openModal.forEach((button) => {
  button.addEventListener('click', () => {
    modalWindow.classList.add('open')
  })
})

const contactButton = document.querySelectorAll('.contact__button')
contactButton.forEach((contact) => {
  contact.addEventListener('click', () => {
    modalWindow.classList.add('open')
  })
})

const modalButton = document.querySelector('.modal__button')
modalButton.addEventListener('click', () => {
  setTimeout(() => {
    modalWindow.classList.remove('open')
  }, 100)
})

const modalClose = document.querySelector('.modal__close')
modalClose.addEventListener('click', () => {
  setTimeout(() => {
    modalWindow.classList.remove('open')
  }, 100)
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    setTimeout(() => {
      modalWindow.classList.remove('open')
    }, 100)
  }
})

document
  .querySelector('.modal .modal__window')
  .addEventListener('click', (e) => {
    e._isClickWithInModal = true
  })

document.querySelector('.modal').addEventListener('click', (e) => {
  if (e._isClickWithInModal) return
  e.currentTarget.classList.remove('open')
})

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 300,
  framesCount = 20
anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    let coordY =
      document.querySelector(item.getAttribute('href')).getBoundingClientRect()
        .top + window.pageYOffset
    let scroller = setInterval(function () {
      let scrollBy = coordY / framesCount
      if (
        scrollBy > window.pageYOffset - coordY &&
        window.innerHeight + window.pageYOffset < document.body.offsetHeight
      ) {
        window.scrollBy(0, scrollBy)
      } else {
        window.scrollTo(0, coordY)
        clearInterval(scroller)
      }
    }, animationTime / framesCount)
  })
})
