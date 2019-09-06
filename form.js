const page = document.querySelector(".layout-content");
let userInputs = [];
let userOutputs = [];

const updateInfo = (value, index) => {
  console.log(value, index);
  // let output = event.target.value;
  userOutputs[index].textContent = value;
  if (userOutputs[2].textContent.length > 0) {
    userOutputs[2].setAttribute("class", "email-placeholder");
  }
};

const initForm = () => {
  const template = document.querySelector("#form-template");
  const clone = document.importNode(template.content, true);
  page.setAttribute("id", "form");
  page.innerHTML = "";
  page.appendChild(clone);
  const form = document.querySelector(".form");
  console.log(form.clientHeight);
  const preview = document.querySelector(".preview-container");
  preview.style.height = `${form.clientHeight}px`;

  userOutputs = Array.from(document.querySelectorAll(".output"));
  userInputs = Array.from(document.querySelectorAll("input"));
  console.log(userInputs, userOutputs);
  userInputs.map((input, index) => {
    input.addEventListener("keyup", updateInfo(event.target.value, index));
  });
};

export { initForm };
