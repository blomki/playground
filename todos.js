const todos = [];

const initTodos = () => {
  const template = document.querySelector("#todos-template");
  const clone = template.content.cloneNode(true);
  const page = document.querySelector(".layout-content");
  page.setAttribute("id", "todos");
  page.innerHTML = "";
  page.appendChild(clone);
  const userInput = document.querySelector(".todo-input");
  userInput.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
      console.log("coucou");
      addTodo(userInput.value);
    }
  });
};

const addTodo = todo => {
  todos.push(todo);
  const page = document.querySelector(".layout-todos");
  if (todos.length === 1) {
    document.querySelector(".info").remove();
    const list = document.createElement("ul");
    list.classList.add("todo-list");
    page.appendChild(list);
  }
  const list = document.querySelector(".todo-list");
  const item = document.createElement("li");
  item.setAttribute("id", `todo-${todos.length - 1}`);

  const label = document.createElement("label");
  label.setAttribute("for", `check-${todos.length - 1}`);
  label.innerText = todo;

  const checkbox = document.createElement("input");
  checkbox.classList.add("input-cbx");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", `check-${todos.length - 1}`);
  checkbox.setAttribute("value", `${todos.length - 1}`);
  label.addEventListener("click", event => {
    label.classList.contains("done")
      ? label.classList.remove("done")
      : label.classList.add("done");
  });
  item.appendChild(checkbox);
  item.appendChild(label);
  list.appendChild(item);
  document.querySelector(".todo-input").value = "";
};

export { initTodos };

// <input type="checkbox" id="scales" name="scales"
//          checked>
//   <label for="scales">Scales</label>
