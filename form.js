const page = document.querySelector(".layout-content");

const initForm = () => {
  const page = document.querySelector(".layout-content");
  const template = document.querySelector("#form-template");
  const clone = document.importNode(template.content, true);
  page.setAttribute("id", "form");
  page.innerHTML = "";
  page.appendChild(clone);
  //   const userInput = document.querySelector(".todo-input");
  //   userInput.addEventListener("keyup", event => {
  //     if (event.keyCode === 13) {
  //       console.log("coucou");
  //       addTodo(userInput.value);
  //     }
  //   });
};

export { initForm };
