import {getHeader} from "./header";
import { getHomeDiv } from "./home";
import { getMenuDiv } from "./menu";
import { getContactDiv } from "./contact";

let content = document.getElementById("content");
let currentPage = "home";
content.appendChild(getHeader());
content.appendChild(getHomeDiv());
addEventlistenerToNavLinks();

function addEventlistenerToNavLinks() {
    let links = content.firstElementChild.firstElementChild.firstElementChild.children;
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", e => {
            let pageId = e.target.attributes[1].nodeValue;
            if (pageId != currentPage) {
                setCurrentPage(pageId);
            }
        })
    }
}

function setCurrentPage(pageId) {
    content.removeChild(content.lastElementChild);
    currentPage = pageId;

    if (pageId == 'home') {
        content.appendChild(getHomeDiv());

    } else if (pageId == 'menu') {
        content.appendChild(getMenuDiv());

    } else {
        content.appendChild(getContactDiv());
    }
}