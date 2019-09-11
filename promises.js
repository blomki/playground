const initPromises = () => {
  console.log("on passe dans initPromises");
  const page = document.querySelector(".layout-content");
  const template = document.querySelector("#promises-template");
  const clone = document.importNode(template.content, true);
  page.setAttribute("id", "promises");
  page.innerHTML = "";
  page.appendChild(clone);
};

export { initPromises };
