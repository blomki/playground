import { initPosts } from "./posts.js";
import { getComments } from "./comments.js";
import { initTodos } from "./todos.js";
import { initForm } from "./form.js";

window.addEventListener("load", initPosts(1));

const commentsButtons = Array.from(
  document.querySelectorAll(".get-comments-btn")
);

const todosButton = document.querySelector("#displayTodos");
todosButton.addEventListener("click", event => initTodos());

const formButton = document.querySelector("#displayForm");
formButton.addEventListener("click", event => initForm());

commentsButtons.map((button, index) => {
  button.parentNode.setAttribute("id", `comments-container-${index + 1}`);
  button.setAttribute("id", `get-comments-${index + 1}`);
  button.addEventListener("click", event => {
    getComments(index);
  });
});
