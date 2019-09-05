class init {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  initForm = () => {
    page.setAttribute(this.id, this.name);
    // page.innerHTML = `<header><h2>Formulaire de contact</h2></header><section class="todos"><input type="text" class="todo-input" placeholder="Ajouter une tâche"/><p class="info">Rien à faire, tout est ok !</p></section>`;
    // const userInput = document.querySelector(".todo-input");
    // userInput.addEventListener("keyup", event => {
    //   if (event.keyCode === 13) {
    //     console.log("coucou");
    //     addTodo(userInput.value);
    //   }
    // });
  };
}
export { init };
