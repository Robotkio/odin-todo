import { TodoItem, itemBuilder } from "./todo-item-builder";
import { format } from "../../node_modules/date-fns";
export { displayTodoItems, 
         addItemFromForm,
         clearItemDisplayArea as clearDisplayArea };

/* setup */

const displayArea = document.getElementById("main-display");
const btnAdd = document.querySelector(".todo-add-btn");
const btnClear = document.querySelector(".todo-clear-btn");
const btnCancel = document.querySelector(".todo-cancel-btn");

const formTitle = document.getElementById("item-title");
const formDate = document.getElementById("item-date");
const formDescription = document.getElementById("item-description");

let items = new Array();

btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    addItemFromForm();
    clearItemDisplayArea();
    displayTodoItems("main-display");
});

btnClear.addEventListener("click", (event) => {
    event.preventDefault();
    resetForm();
});

/* run */

// clearLocalStorage();
resetForm();
loadItemsFromLocalStorage();
displayTodoItems();

/* functions */

function addItemFromForm() {
    const data = getFormData();
    console.log(data);
    if (data) {
        const item = new TodoItem(data.title, data.desc, data.date);
        items.push(item);
        resetForm();
        saveItemsToLocalStorage();
        displayTodoItems();
    } else {
        console.warn("Form incomplete.");
    }
}

function getFormData() {
    const title = formTitle.value;
    const date = formDate.value;
    const desc = formDescription.value;
    if (title && date && desc) {
        return {title, date, desc};
    }
    return null;
}

function displayTodoItems() {
    items.forEach((element) => {
        displayArea.appendChild(itemBuilder(element));
    });
}

function clearItemDisplayArea() {
   displayArea.innerHTML = ""; 
}

function saveItemsToLocalStorage() {
    localStorage.setItem("todoItems", JSON.stringify(items));
}

function loadItemsFromLocalStorage() {
    const localItems = getItemsFromLocalStorage();
    items = localItems;
}

function getItemsFromLocalStorage() {
    let jsonItems;
    if (jsonItems = JSON.parse(localStorage.getItem("todoItems"))) {
        const returnItems = new Array();
        jsonItems.forEach((i) => {
            const item = new TodoItem(i._title, i._description, new Date(i._date));
            item.id = i._id;
            item.complete = i._complete;
            returnItems.push(item);
        });
        return returnItems;
    } else {
        return [];
    }
}

function clearLocalStorage() {
    localStorage.setItem("todoItems", null);
}

function resetForm() {
    formTitle.value = "";
    formDescription.value = "";
    formDate.value = format(new Date(), "yyyy-MM-dd");
}