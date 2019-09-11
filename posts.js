import { getComments } from "./comments.js";

const initPosts = (id = 1) => {
  console.log("on passe dans initPosts");
  const page = document.querySelector(".layout-content");
  const template = document.querySelector("#posts-template");
  const clone = document.importNode(template.content, true);
  page.setAttribute("id", "posts");
  page.innerHTML = "";
  page.appendChild(clone);

  const postButtons = Array.from(document.querySelectorAll(".get-posts-btn"));
  const postsButton = document.querySelector("#display-posts");
  postsButton.addEventListener("click", event => initPosts());
  postButtons.map((button, index) => {
    button.setAttribute("id", `display-post-${index + 1}`);
    button.addEventListener("click", event => {
      getPosts(index + 1);
    });
  });
  getPosts(1);
};

const getPosts = id => {
  let postPlaceHolder = document.querySelector(`.layout-article`);
  postPlaceHolder.innerHTML = "<p>Chargement du contenu</p>";
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(handleErrors)
    .then(response => response.json())
    .then(json => {
      postPlaceHolder.innerHTML = "";
      postPlaceHolder.setAttribute("id", `post-${json.id}`);
      // INTRODUCTION
      const postHeader = document.createElement("header");
      const postTitle = document.createElement("h2");
      const postIntro = document.createElement("p");
      postTitle.innerText = json.title;
      postIntro.innerText = json.body;
      postHeader.appendChild(postTitle);
      postHeader.appendChild(postIntro);
      postPlaceHolder.appendChild(postHeader);
      // CONTENU GENERE ALEATOIREMENT
      const number = Math.floor(Math.random() * 4);
      for (let i = 0; i <= number; i++) {
        const random = Math.floor(Math.random() * 4);
        const paragraph = document.createElement("p");
        for (let amount = 0; amount <= random; amount++) {
          paragraph.insertAdjacentHTML("beforeend", json.body);
        }
        postPlaceHolder.appendChild(paragraph);
      }
      // FOOTER
      const footer = document.createElement("footer");
      const disclaimer = document.createElement("p");
      disclaimer.classList.add("no-comment");
      disclaimer.innerText = "Aucun commentaire pour l'instant";
      const button = document.createElement("button");
      button.classList.add("get-comments-btn");
      button.innerText = "Charger les commentaires";
      button.addEventListener("click", event => {
        getComments(id);
      });
      footer.setAttribute("id", `comments-container-${id}`);
      footer.appendChild(disclaimer);
      footer.appendChild(button);
      postPlaceHolder.appendChild(footer);
    })
    .catch(error => console.log(error));
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
};

export { initPosts, getPosts };
