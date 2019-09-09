const initContacts = () => {
  console.log("InitContacts");
  const page = document.querySelector(".layout-content");
  const template = document.querySelector("#contacts-template");
  const clone = document.importNode(template.content, true);
  page.setAttribute("id", "contacts");
  page.innerHTML = `<p>Chargement des contacts</p><div class="loader"></div>`;
  page.appendChild(clone);
};

export { initContacts };
