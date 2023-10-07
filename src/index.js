import { getHeader } from "./header";
import { getHomeDiv } from "./home";
import { getMenuDiv } from "./menu";
import { getContactDiv } from "./contact";

let content = document.getElementById("content");
let currentPage = "home";
content.appendChild(getHeader());
setCurrentPage(currentPage);
addEventlistenerToNavLinks();
let currentLink =
  content.firstElementChild.firstElementChild.firstElementChild
    .firstElementChild.firstElementChild;
currentLink.classList.add("selectedLink");

function addEventlistenerToNavLinks() {
  let links =
    content.firstElementChild.firstElementChild.firstElementChild.children;
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", (e) => {
      let pageId = e.target.attributes[1].nodeValue;
      if (pageId != currentPage) {
        currentLink.classList.remove("selectedLink");
        setCurrentPage(pageId);
        currentLink = e.target;
        currentLink.classList.add("selectedLink");
      }
    });
  }
}

function setCurrentPage(pageId) {
  currentPage = pageId;

  if (content.children.length > 1) {
    content.removeChild(content.lastElementChild);
  }

  if (pageId == "home") {
    content.appendChild(getHomeDiv());
  } else if (pageId == "menu") {
    content.appendChild(getMenuDiv());
  } else {
    content.appendChild(getContactDiv());
  }
}
