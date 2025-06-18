import "./css/style.css";
import { TodoItem } from "./js/todo-classes";
import { itemBuilder } from "./js/builders";
import { displayTodoItems } from "./js/todo-form-functions";


let items = new Array();
items.push(new TodoItem( "Goal Title", "Just a test goal to see if I can make an item", new Date(2025, 5, 20) ));
items.push(new TodoItem( "Secon Goal", "Lorem ipsum dolar sit amet, ish ime. Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to something something something.", new Date(2025, 5, 20) ));
console.log(items);

displayTodoItems(items);