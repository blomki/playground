import { cleanCSS } from '../script.js'

// const users = []
// const userList = document.querySelector('.contacts')

const initContacts = () => {
  cleanCSS(['lose-bg', 'win-bg'])
  console.log('InitContacts')
  const page = document.querySelector('.layout-content')
  const template = document.querySelector('#contacts-template')
  const clone = document.importNode(template.content, true)
  page.setAttribute('id', 'contacts')
  page.innerHTML = '<p>Chargement des contacts</p><div class="loader"></div>'
  page.appendChild(clone)
  let timer = 0
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      page.innerHTML = ''
      json.map((userData, index) => {
        const user = new User(json[index])
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = user.card
        card.classList.add('show')
        timer += 100
        window.setTimeout(element => {
          page.appendChild(card)
        }, timer)
      })
    })
}

class User {
  constructor(user) {
    this.name = user.name
    this.email = user.email
    this.phone = user.phone
    this.company = user.company.name
    this.catchPhrase = user.company.catchPhrase
  }

  get card() {
    return `
    <h4>${this.name}</h4>
    <p>${this.email}</p>
    <p class="phone">${this.phone}</p>
    <p>${this.company}</p>
    <quote>${this.catchPhrase}</quote>`
  }
}

export { initContacts }
