const menuButtonComponent = function () {
  return `
  <button id="menu-btn"></button>
  `;
};

const beerNavComponent = function (inner) {
  return `
  <nav>${inner}</nav>
  `;
};

const beerAnchorComponent = function (title, id) {
  return `
    <a href="#${id}">${title}</a>
  `;
};

const beerSectionComponent = function (title, sub, text, id) {
  return `
    <section id="${id}">
      <h1 class="beer-name">${title}</h1>
      <h2 class="beer-company">${sub}</h2>
      <h3 class="beer-type">${text}</h3>
    </section>
  `;
};

const menuButtonClickEvent = function (event) {
  event.currentTarget.closest("#root").classList.toggle("menu-opened");
};

const loadEvent = function () {
  // (function (){
  //   console.log("blababla");
  // })();

  const rootElement = document.getElementById("root");

  rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());

  const menuButtonElement = document.getElementById("menu-btn");

  menuButtonElement.addEventListener("click", menuButtonClickEvent);

  let beerSections = "";

  for (const beer of beers.cards) {
    beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
  }
  rootElement.insertAdjacentHTML("beforeend", beerSections);

  let beerAnchors = "";

  for (const beer of beers.cards) {
    beerAnchors += beerAnchorComponent(beer.title);
  }
  rootElement.insertAdjacentHTML("beforeend", beerNavComponent(beerAnchors));
};

window.addEventListener("load", loadEvent);
