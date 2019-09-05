const getComments = id => {
  let commentsPlaceHolder = document.querySelector(`#comments-container-${id}`);
  commentsPlaceHolder.innerHTML = `<p>Chargement des commentaires</p><div class="loader"></div>`;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(json => {
      commentsPlaceHolder.innerHTML = "<h3>Commentaires</h3>";
      for (let index = 0; index <= 5; index++) {
        const elt = json[index];
        commentsPlaceHolder.setAttribute(
          "id",
          `comment-post${id + 1}-${index + 1}`
        );
        const section = document.createElement("section");
        section.classList.add("comment");

        const name = document.createElement("p");
        name.innerHTML = elt.name;
        name.insertAdjacentHTML(
          "beforeend",
          ` <small class="author">(${elt.email})</small>`
        );
        name.classList.add("message-title");
        const message = document.createElement("p");

        message.classList.add("message");

        message.innerText = elt.body;

        section.appendChild(name);
        section.appendChild(message);
        commentsPlaceHolder.appendChild(section);
      }
    });
};

export { getComments };
