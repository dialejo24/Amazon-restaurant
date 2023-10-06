import {getHeader} from "./header";
import { getHomeDiv } from "./home";
import { getMenuDiv } from "./menu";

let content = document.getElementById("content");
content.appendChild(getHeader());
// content.appendChild(getHomeDiv());
content.appendChild(getMenuDiv());