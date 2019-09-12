import { initPosts } from "./posts.js";
import { getComments } from "./comments.js";
import { initTodos } from "./todos.js";
import { initForm } from "./form.js";
import { initContacts } from "./contacts.js";
import { initSvg } from "./svg.js";
import { initPromises } from "./promises.js";
const background = document.querySelector("body");

const pageTemplates = [
  { selector: "#display-posts", action: initPosts },
  { selector: "#display-todos", action: initTodos },
  { selector: "#display-form", action: initForm },
  { selector: "#display-contacts", action: initContacts },
  { selector: "#display-svg", action: initSvg },
  { selector: "#display-promises", action: initPromises }
];

const cleanCSS = (currentClasses, element = background) => {
  currentClasses.map(elt => {
    if (element.classList.contains(elt)) {
      element.classList.remove(elt);
    }
  });
};

pageTemplates.map(elt => {
  document.querySelector(elt.selector).addEventListener("click", elt.action);
});

window.addEventListener("load", initPosts());

const page = document.querySelector(".layout-content");

const commentsButtons = Array.from(
  document.querySelectorAll(".get-comments-btn")
);

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

export { cleanCSS };
