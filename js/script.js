let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mailInput = document.querySelectorAll('.contactform_mail'),
    modal = document.querySelector('.modal'),
    closeModal = document.querySelector('.close'),
    text = document.getElementsByName('message')[0]

chooseBtn.addEventListener('mouseenter', () => {
  heading.textContent = "Действительно все!"
})

chooseBtn.addEventListener('mouseleave', () => {
  heading.textContent = "Все включено"
})

receiveBtn.addEventListener('click', () => {
  modal.style.display = "block"
})

closeModal.addEventListener('click', () => {
  modal.style.display = "none"
})

document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    modal.style.display = "none"
  }
})

nameInput.addEventListener('input', () => {
  text.value = `Меня зовут ${nameInput.value} и Я хочу спросить:`
})