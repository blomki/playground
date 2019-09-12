const page = document.querySelector(".layout-content");
const background = document.querySelector("body");
import { cleanCSS } from "./script.js";

const initPromises = () => {
  cleanCSS(["lose-bg", "win-bg"]);
  const template = document.querySelector("#promises-template");
  const clone = document.importNode(template.content, true);
  page.setAttribute("id", "promises");
  page.innerHTML = "";
  page.appendChild(clone);
  isWinner().then(result => createCard(result), failureCallback);
};

const failureCallback = () => {
  const card = document.createElement("section");
  card.classList.add("game-card");

  const title = document.createElement("h3");
  title.classList.add("title");
  title.innerText = "Erreur. Promesse non tenue";

  card.appendChild(title);
  page.appendChild(card);

  handleBgClass(background, "failure");
};

const handleBgClass = (element, result) => {
  switch (result) {
    case "failure":
      cleanCSS(["lose-bg", "win-bg"], element);
      break;
    case "winner":
      cleanCSS(["lose-bg"], element);
      element.classList.add("win-bg");
      break;
    case "loser":
      cleanCSS(["win-bg"], element);
      element.classList.add("lose-bg");
      break;
    default:
      console.log("Oups " + result + ".");
  }
};

const isWinner = () => {
  return new Promise((resolve, reject) => {
    const result = Math.random() > 0.5 ? "gagnant" : "perdant";
    if (Math.random() > 0.5) {
      resolve(result);
    } else {
      reject("Résultat inconnu");
    }
  });
};

const createCard = result => {
  const card = document.createElement("section");
  card.classList.add("game-card");
  card.classList.add(result === "gagnant" ? "win" : "lose");

  const picto = document.createElement("img");
  picto.setAttribute("src", result === "gagnant" ? "winner.svg" : "loser.svg");
  picto.classList.add("picto-result");

  const title = document.createElement("h3");
  title.classList.add("title");
  title.innerText =
    result === "gagnant"
      ? "Félicitations, tu as gagné !"
      : "Ouch, tu as perdu !";

  card.appendChild(picto);
  card.appendChild(title);

  page.appendChild(card);
  handleBgClass(background, result === "gagnant" ? "winner" : "loser");

  return result;
};

export { initPromises };
