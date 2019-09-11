const page = document.querySelector(".layout-content");
const template = document.querySelector("#svg-template");
const header = document.querySelector(".layout-header");
const windowW = page.offsetWidth;
const windowH = window.innerHeight - header.offsetHeight;
const spacerW = windowW / 30;
const spacerH = windowH / 20;
let degrees = 0;
let intervalID;
const colorPalette = [
  "#e8eaf6",
  "#c5cbe9",
  "#9fa8da",
  "#7985cb",
  "#5c6bc0",
  "#3f51b5",
  "#394aae",
  "#3140a5",
  "#29379d",
  "#1b278d",
  "#c6cbff",
  "#939dff",
  "#606eff",
  "#4757ff"
];

const initSvg = () => {
  console.log("initSvg");

  const clone = document.importNode(template.content, true);
  page.setAttribute("id", "svg");
  page.appendChild(clone);
  page.innerHTML = `<p>Chargement</p><div class="loader"></div>`;

  // CREATION DE L'IMAGE
  const imageSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const imageSvgAttr = [
    { attr: "width", value: windowW },
    { attr: "height", value: windowH - 100 },
    { attr: "xmlns", value: "http://www.w3.org/2000/svg" },
    { attr: "version", value: "1.1" },
    { attr: "class", value: "svgblur" }
  ];
  imageSvgAttr.map(param => {
    imageSvg.setAttribute(param.attr, param.value);
  });

  const svgNS = imageSvg.namespaceURI;
  let y1 = 10 - spacerH;
  let y2 = 10 - spacerH;
  for (let nbH = 0; nbH < 21; nbH++) {
    y1 = Math.floor((y1 += spacerH));
    y2 = Math.floor((y2 += spacerH));
    let x1 = 2 - spacerW;
    let x2 = 18 - spacerW;
    for (let nbL = 0; nbL < 31; nbL++) {
      x1 += spacerW;
      x2 += spacerW;
      const color =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const line = createLine(svgNS, color, x1, x2, y1, y2);
      imageSvg.appendChild(line);
    }
  }

  page.innerHTML = "";
  const circleAttr = [
    { attr: "cx", value: windowW / 2 },
    { attr: "cy", value: windowH / 2 },
    { attr: "r", value: windowW / 5 },
    { attr: "fill", value: "black" }
  ];
  const circle = document.createElementNS(svgNS, "circle");
  circleAttr.map(param => {
    circle.setAttribute(param.attr, param.value);
  });
  imageSvg.appendChild(circle);
  page.appendChild(imageSvg);
  rotateLines();
};

const createLine = (svgNS, color, x1, x2, y1, y2) => {
  const lineAttr = [
    { attr: "x1", value: x1 },
    { attr: "x2", value: x2 },
    { attr: "y1", value: y1 },
    { attr: "y2", value: y2 },
    { attr: "stroke-linecap", value: "round" },
    { attr: "stroke", value: color },
    { attr: "stroke-width", value: "2" }
  ];
  const line = document.createElementNS(svgNS, "line");
  lineAttr.map(param => {
    line.setAttribute(param.attr, param.value);
  });
  return line;
};

const rotateLines = () => {
  intervalID = setInterval(rotate, 100);
};

const rotate = () => {
  degrees += 10;
  const segments = Array.from(document.querySelectorAll("line"));
  segments.map(elt => {
    const xPos = elt.getAttribute("x1");
    const yPos = elt.getAttribute("y1");
    elt.setAttribute("transform", `rotate(${degrees}, ${xPos}, ${yPos})`);
  });
};

export { initSvg };
