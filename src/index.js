import getHeader from "./header";
import getHomeDiv from "./home";

let content = document.getElementById("content");
content.appendChild(getHeader());
content.appendChild(getHomeDiv());