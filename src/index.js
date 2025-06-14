import "./css/style.css";
import { Item, Note, Project } from "./js/todo-data.js";
import { makeItem } from "./js/todo-display.js";

console.log("Hello world!");

let item = new Item("A Grand Title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolores asperiores delectus debitis, cum magnam quod autem ullam perspiciatis ea vitae est eius molestias!", "DueDate", "high", "blue");
item = makeItem(item);
let container = document.querySelector(".item-container");
console.log(item);
container.appendChild(item);