import { itemBuilder } from "./todo-item-builder";
export { displayTodoItems };

const displayArea = document.getElementById("main-display");
const addBtn = document.getElementById("todo-add-btn");
const clearBtn = document.getElementById("todo-clear-btn");
const cancelBtn = document.getElementById("todo-cancel-btn");

function displayTodoItems(items) {
    items.forEach((element) => {
            displayArea.appendChild(itemBuilder(element));
    });
}

