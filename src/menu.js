import { createElement } from "./home";
import bagreImg from "./images/bagre-salsa.jpg";
import cevicheImg from "./images/ceviche-pescado.jpg";
import chicharronImg from "./images/chicharron-pirarucu.jpg";
import mojojoyImg from "./images/mojojoy.jpg";
import patarashcaImg from "./images/patarashca.jpg";

export { getMenuDiv };

let menuDiv = createElement("div");

let pageMainTitle = createElement("h2", "Menu", "menu");
menuDiv.appendChild(pageMainTitle);

let dishes = createElement("div", "", "dishes");

createMenu();
menuDiv.appendChild(dishes);

function getMenuDiv() {
  return menuDiv;
}

function createMenu() {
  let dishesInformation = [
    {
      imagesUrls: [
        bagreImg,
        cevicheImg,
        chicharronImg,
        mojojoyImg,
        patarashcaImg,
      ],
      names: [
        "Bagre en salsa",
        "Ceviche de pescado",
        "Chicharron de pirarucu",
        "Mojojoy",
        "Patarashca",
      ],
      prices: ["$20", "$25", "$25", "$20", "$20"],
    },
  ];

  for (let i = 0; i < 5; i++) {
    dishes.appendChild(
      createDish(
        dishesInformation[0].names[i],
        dishesInformation[0].imagesUrls[i],
        dishesInformation[0].prices[i]
      )
    );
  }
}

function createDish(title, url, price) {
  let div = createElement("div");
  let dishTitle = createElement("h3", title);
  let dishPrice = createElement("p", `${price}`);
  let dishImg = new Image();
  dishImg.src = url;
  dishImg.className = "dishImg";
  div.appendChild(dishTitle);
  div.appendChild(dishImg);
  div.appendChild(dishPrice);

  return div;
}
