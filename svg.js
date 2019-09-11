const page = document.querySelector(".layout-content");

const initSvg = () => {
  const containerAttr = [
    { attribute: "width", value: "160" },
    { attribute: "height", value: "140" },
    { attribute: "xmlns", value: "http://www.w3.org/2000/svg" },
    { attribute: "version", value: "1.1" }
  ]
  const container = document.createElement("svg");
  containerAttr.map(param => {
    container.setAttribute(param.attribute, param.value);
  })
  console.log(container);
  const lineAttr = [
    { attr: "x1", value: "40" },
    { attr: "x2", value: "120" },
    { attr: "y1", value: "20" },
    { attr: "y2", value: "20" },
    { attr: "stroke-linecap", value: "round" },
    { attr: "stroke", value: "black" },
    { attr: "stroke-width", value: "20" },
  ]
  const line = document.createElement("line");
  lineAttr.map(param => {
    line.setAttribute(param.attribute, param.value);
  })
  container.appendChild(line);
  page.appendChild(container);
};

export { initSvg };
