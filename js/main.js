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
