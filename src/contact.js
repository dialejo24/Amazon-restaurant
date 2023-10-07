import { createElement } from "./home";
export { getContactDiv };

let contactDiv = createElement("div", "", "contactDiv");
let contactTitle = createElement("h2", "Contact us");
let telephone = createElement("p", "Telephone:", "contactType");
let telephoneNumber = createElement("p", "+57 3134534678");
let email = createElement("p", "Email:", "contactType");
let emailAdress = createElement("p", "amazonrestaurant@gmail.com");
contactDiv.appendChild(contactTitle);
contactDiv.appendChild(telephone);
contactDiv.appendChild(telephoneNumber);
contactDiv.appendChild(email);
contactDiv.appendChild(emailAdress);

function getContactDiv() {
  return contactDiv;
}
