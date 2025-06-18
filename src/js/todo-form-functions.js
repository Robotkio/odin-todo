import { itemBuilder } from "../js/builders";
export { displayTodoItems };

const display = document.getElementById("main-display");

function displayTodoItems(items) {
    items.forEach((element) => {
            display.appendChild(itemBuilder(element));
    });
}