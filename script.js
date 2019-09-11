import { initPosts } from "./posts.js";
import { getComments } from "./comments.js";
import { initTodos } from "./todos.js";
import { initForm } from "./form.js";
import { initContacts } from "./contacts.js";
import { initSvg } from "./svg.js";
import { initPromises } from "./promises.js";

const pageTemplates = [
  { selector: "#display-posts", action: initPosts },
  { selector: "#display-todos", action: initTodos },
  { selector: "#display-form", action: initForm },
  { selector: "#display-contacts", action: initContacts },
  { selector: "#display-svg", action: initSvg },
  { selector: "#display-promises", action: initPromises }
];

pageTemplates.map(elt => {
  document.querySelector(elt.selector).addEventListener("click", elt.action);
});

window.addEventListener("load", initPosts());

const page = document.querySelector(".layout-content");

const commentsButtons = Array.from(
  document.querySelectorAll(".get-comments-btn")
);

// const todosButton = document.querySelector("#display-todos");
// todosButton.addEventListener("click", event => initTodos());

// const formButton = document.querySelector("#display-form");
// formButton.addEventListener("click", event => initForm());

// const contactsButton = document.querySelector("#display-contacts");
// contactsButton.addEventListener("click", event => initContacts());

commentsButtons.map((button, index) => {
  button.parentNode.setAttribute("id", `comments-container-${index + 1}`);
  button.setAttribute("id", `get-comments-${index + 1}`);
  button.addEventListener("click", event => {
    getComments(index);
  });
});

const clearPage = () => {};

function init(action) {
  return action;
}
