import { initPosts } from './scripts/posts.js'
import { getComments } from './scripts/comments.js'
import { initTodos } from './scripts/todos.js'
import { initForm } from './scripts/form.js'
import { initContacts } from './scripts/contacts.js'
import { initSvg } from './scripts/svg.js'
import { initPromises } from './scripts/promises.js'
const background = document.querySelector('body')

const pageTemplates = [
  { selector: '#display-posts', action: initPosts },
  { selector: '#display-todos', action: initTodos },
  { selector: '#display-form', action: initForm },
  { selector: '#display-contacts', action: initContacts },
  { selector: '#display-svg', action: initSvg },
  { selector: '#display-promises', action: initPromises }
]

const cleanCSS = (currentClasses, element = background) => {
  currentClasses.map(elt => {
    if (element.classList.contains(elt)) {
      element.classList.remove(elt)
    }
  })
}

pageTemplates.map(elt => {
  document.querySelector(elt.selector).addEventListener('click', elt.action)
})

window.addEventListener('load', initPosts())

// const page = document.querySelector('.layout-content')

const commentsButtons = Array.from(
  document.querySelectorAll('.get-comments-btn')
)

commentsButtons.map((button, index) => {
  button.parentNode.setAttribute('id', `comments-container-${index + 1}`)
  button.setAttribute('id', `get-comments-${index + 1}`)
  button.addEventListener('click', event => {
    getComments(index)
  })
})

export { cleanCSS }
