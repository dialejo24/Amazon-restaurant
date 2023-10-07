import image from "./images/food.jpg";
export { getHomeDiv, createElement };

let homeDiv = document.createElement("div");

let foodImage = new Image();
foodImage.src = image;
foodImage.className = "homeImage";
homeDiv.appendChild(foodImage);
homeDiv.classList.add("containerWidth");

let mainContent = createElement("div");
let title = createElement("h1", "Amazon's Restaurant");
mainContent.appendChild(title);

let restaurantDescription = document.createElement("p");
restaurantDescription.textContent = `
    Amazon's Restaurant is the perfect place to have a fantastic and delicious amazonian dish.
    Come and enjoy our variety in amazonian food. The atmosphere here will make you feel like
    you are in the middle of the jungle surrounded by a peaceful and relaxing nature.
`;
restaurantDescription.classList.add("restaurant_description");
mainContent.appendChild(restaurantDescription);

let wrapper = createElement("div");
wrapper.classList.add("wrapper");

let dailyMenu = createElement("div");
let menuTitle = createElement("h3", "Daily Menu", "menuTitle");
let availableDays = createElement("p", "From monday to friday");
let menuDescription = createElement(
  "p",
  "main course + 1 beverage + 1 dessert",
  "plate"
);
let menuPrice = createElement("p", "$15", "platePrice");
dailyMenu.appendChild(menuTitle);
dailyMenu.appendChild(availableDays);
dailyMenu.appendChild(menuDescription);
dailyMenu.appendChild(menuPrice);

let specialDish = createElement("div");
let dishTitle = createElement("h3", "Special menu", "menuTitle");
let dishAvailability = createElement("p", "Saturday");
let dishDescription = createElement("p", "Exotic amazonian dish", "plate");
let dishPrice = createElement("p", "$25", "platePrice");
specialDish.appendChild(dishTitle);
specialDish.appendChild(dishAvailability);
specialDish.appendChild(dishDescription);
specialDish.appendChild(dishPrice);

wrapper.appendChild(dailyMenu);
wrapper.appendChild(specialDish);
mainContent.appendChild(wrapper);

homeDiv.appendChild(mainContent);

function getHomeDiv() {
  return homeDiv;
}

function createElement(type, text = "", classes = "") {
  let element = document.createElement(type);
  if (classes) {
    element.className = classes;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}
