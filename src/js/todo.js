import { format } from "../../node_modules/date-fns";
import { TodoList } from "./todo-items";
import { addFormElement } from "./todo-input-form";

addFormElement();

const formTitle = document.getElementById("item-title");
const formDate = document.getElementById("item-date");
const formDescription = document.getElementById("item-description");

const displayArea = document.getElementById("main-display");
const btnAdd = document.querySelector(".todo-add-btn");
const btnClear = document.querySelector(".todo-clear-btn");
const btnCancel = document.querySelector(".todo-cancel-btn");

const tl = new TodoList();
resetForm();

btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    tl.addItemFromFormInputs();
    resetForm();
});

btnClear.addEventListener("click", (event) => {
    event.preventDefault();
    resetForm();
});

function resetForm() {
    formTitle.value = "";
    formDescription.value = "";
    formDate.value = format(new Date(), "yyyy-MM-dd");
}