import { format } from "../../node_modules/date-fns";
import { svgBuilder } from "./generic-builders";
import { TodoItem } from "./todo-item-class";
export { TodoItem, itemBuilder };

function itemBuilder(item) {
    const htmlItem = document.createElement("div");
    htmlItem.classList.add("todo-item");

    const header = document.createElement("header");

    /* completed icon */
    const icoComplete = document.createElement("div");
    icoComplete.classList.add("icon");
    const svg = svgBuilder("checkbox-blank-outline", "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z")
    icoComplete.appendChild(svg);

    /* title */
    const title = document.createElement("div");
    title.classList.add("todo-title");
    title.innerText = item.title;

    /* due date */
    const dueDate = document.createElement("div");
    dueDate.classList.add("todo-due-date");
    dueDate.innerText = format(item.date, "MM/dd/yyy");
    
    header.appendChild(icoComplete);
    header.appendChild(title);
    header.appendChild(dueDate);
    
    /* body */
    const body = document.createElement("div");
    body.classList.add("todo-body");
    body.innerText = item.description;

    htmlItem.appendChild(header);
    htmlItem.appendChild(body);

    return htmlItem;
}