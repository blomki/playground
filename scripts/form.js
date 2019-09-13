import { cleanCSS } from '../script.js'

const page = document.querySelector('.layout-content')
let textArea
let userInputs, userOutputs

const updateInfo = (value, index) => {
  userOutputs[index].textContent = value
  if (userOutputs[2].textContent.length > 0) {
    userOutputs[2].setAttribute('class', 'email-placeholder')
  }
}

const initForm = () => {
  cleanCSS(['lose-bg', 'win-bg'])
  console.log('on passe dans initForm')
  const template = document.querySelector('#form-template')
  const clone = document.importNode(template.content, true)
  page.setAttribute('id', 'form')
  page.innerHTML = ''
  page.appendChild(clone)
  const form = document.querySelector('.form')
  const preview = document.querySelector('.preview-container')
  const messagePreview = document.querySelector('.message-preview')
  preview.style.height = `${form.clientHeight}px`
  textArea = document.querySelector('#message')
  textArea.addEventListener('focus', () => {
    checkMessage()
  })
  textArea.addEventListener('blur', () => {
    checkMessage()
  })
  textArea.addEventListener('keyup', () => {
    messagePreview.textContent = event.target.value
  })
  userOutputs = Array.from(document.querySelectorAll('.output'))
  userInputs = Array.from(document.querySelectorAll('input'))
  userInputs.map((input, index) => {
    input.addEventListener('keyup', () => updateInfo(event.target.value, index))
  })
}

const checkMessage = () => {
  if (textArea.value.length === 0) {
    textArea.value = "J'adore ce que vous faites..."
  } else if (textArea.value === "J'adore ce que vous faites...") {
    textArea.value = ''
  }
}

export { initForm }
