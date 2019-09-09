const tagName = "app-card";
const template = document.createElement("template");
template.innerHTML = `<img id="image"/>`;

class AppCard extends HTMLElement {
  constructor() {
    super();
    this.src = "";
    this.alt = "";
  }

  connectedCallback() {
    // Initialize properties that depend on light DOM
    this.src = this.getAttribute("src") || this.src;
    this.alt = this.getAttribute("alt") || this.alt;
    // On vérifie si le shadowroot existe, si non on le crée à partir du template
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      // et on crée un pointer de l'image en la récupérant dans le shadow root
      this.shadowImage = this.shadowRoot.getElementById("image");
    }
    // Ensuite, on affecte à ce pointeur la valeur stockée dans la classe
    this.shadowImage.src = this.src;
    this.shadowImage.alt = this.alt;
  }
}

const register = () => customElements.define(tagName, AppCard);
window.WebComponents ? window.WebComponents.waitFor(register) : register();
