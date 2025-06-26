import { format } from "../../node_modules/date-fns/index.d.cts";
import { svgBuilder } from "./generic-builders";
import { TodoItemCollection } from "./todo-item-collection-class";
export { TodoList };

class TodoList {
    constructor(itemCollectionName) {
        this._itemCollection = new TodoItemCollection(itemCollectionName);
        this.loadItems();
        this.displayItems();
    }
    saveItems(){
        this._itemCollection.saveToLocalStorage();
    }
    loadItems(){
        this._itemCollection.loadFromLocalStorage();
    }
    addItemFromFormInputs() {
        const formTitle = document.getElementById("item-title");
        const formDate = document.getElementById("item-date");
        const formDescription = document.getElementById("item-description");
        this._itemCollection.addNewItem(formTitle.value, formDescription.value, formDate.value);
        console.log(this._itemCollection.items);
        this.saveItems();
        this.displayItems();
    }
    displayItems() {
        const display = document.getElementById("main-display");
        display.innerHTML = "";
        const items = this.getBuiltItems();
        items.forEach(item => display.appendChild(item));
    }
    getBuiltItems() {
        const items = [];
        this._itemCollection.items.forEach((item) => {
            items.push(this._buildItem(item));
        });
        return items;
    }
    _buildItem(item) {
        const htmlItem = document.createElement("div");
        htmlItem.classList.add("todo-item");

        const header = document.createElement("header");

        /* completed icon */
        const icoComplete = this._buildCompletedIcon(item);

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
    _buildCompletedIcon(item) {
        const icoComplete = document.createElement("div");
        icoComplete.classList.add("icon");
        let svg;
        if (item.complete) {
            svg = svgBuilder("checkbox-outline", "M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9");
        } else {
            svg = svgBuilder("checkbox-blank-outline", "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z")
        }
        svg.style = "pointer-events: none;";
        icoComplete.appendChild(svg);

        icoComplete.addEventListener("click", (event) => {
            item.complete = item.complete ? false : true;
            let svg;
            if (item.complete) {
                svg = svgBuilder("checkbox-outline", "M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9");
            } else {
                svg = svgBuilder("checkbox-blank-outline", "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"); 
            }
            svg.style = "pointer-events: none;";
            event.target.innerHTML = "";
            event.target.appendChild(svg);
            this.saveItems();
        });
        return icoComplete;
    }
}

const itemBuilder = (() => {
    function itemHtmlBuilder(item) {
        const htmlItem = document.createElement("div");
        htmlItem.classList.add("todo-item");

        const header = document.createElement("header");

        /* completed icon */
        const icoComplete = makeCompletedIcon(item);

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
    function makeCompletedIcon(item){
        const icoComplete = document.createElement("div");
        icoComplete.classList.add("icon");
        let svg = svgBuilder("checkbox-blank-outline", "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z")
        if (item.complete) {
            svg = svgBuilder("checkbox-outline", "M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9");
        }
        svg.style = "pointer-events: none;";
        icoComplete.appendChild(svg);

        icoComplete.addEventListener("click", (event) => {
            item.complete = item.complete ? false : true;
            let svg;
            if (item.complete) {
                svg = svgBuilder("checkbox-outline", "M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9");
            } else {
                svg = svgBuilder("checkbox-blank-outline", "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"); 
            }
            svg.style = "pointer-events: none;";
            event.target.innerHTML = "";
            event.target.appendChild(svg);
        });
        return icoComplete;
    }
});

