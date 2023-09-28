let content = document.getElementById("content");
let header = document.createElement("header");
let nav = document.createElement("nav");
let ul = document.createElement("ul");

ul.appendChild(createListItem("Home", "home"));
ul.appendChild(createListItem("Menu", "menu"));
ul.appendChild(createListItem("Contact", "contact"));

nav.appendChild(ul);
header.appendChild(nav);
content.appendChild(header);

function createListItem(text, id) {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = text;
    link.setAttribute("href", "#");
    li.appendChild(link);
    li.setAttribute("id", id);
    return li;
}