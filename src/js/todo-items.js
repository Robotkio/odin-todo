import { format } from "../../node_modules/date-fns/index.d.cts";
import { svgBuilder } from "./generic-builders";
import { TodoItemCollection } from "./todo-item-collection-class";
import { TodoItem } from "./todo-item-class";
export { TodoList };

class TodoList {
    constructor(itemCollectionName) {
        this._itemCollection = new TodoItemCollection(itemCollectionName);
        this.loadItems();
        this.displayItems();
    }
    get items() {
        return this._itemCollection;
    }
    saveItems(){
        this._itemCollection.saveToLocalStorage();
    }
    loadItems(){
        this._itemCollection.loadFromLocalStorage();
    }
    addItemFromFormInputs() {
        const data = this._getFormData();
        const item = new TodoItem(data.title, data.desc, data.date);
        this._itemCollection.addExistingItem(item);

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
            try {
                items.push(this._buildItem(item));
            }
            catch {
                console.log("Item build error.");
            }
        });
        return items;
    }
    _getFormData() {
        const title = document.getElementById("item-title").value;
        const date = document.getElementById("item-date").value;
        const desc = document.getElementById("item-description").value;
        return { title, date, desc };
    }
    _buildItem(item) {
        const htmlItem = document.createElement("div");
        htmlItem.classList.add("todo-item");

        const header = document.createElement("header");

        /* icons */
        const icoComplete = this._buildCompletedIcon(item);
        const icoDelete = this._buildDeleteIcon(item);
        const icoEdit = this._buildEditIcon(item);

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
        header.appendChild(icoDelete);
        header.appendChild(icoEdit);
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
    _buildDeleteIcon(item) {
        const icoComplete = document.createElement("div");
        icoComplete.classList.add("icon");
        let svg = svgBuilder("trash-can-outline", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z");
        icoComplete.appendChild(svg);

        icoComplete.addEventListener("click", () => {
            this._itemCollection.removeItemByID(item.id);
            this.saveItems();
            this.displayItems();
        });
        return icoComplete;
    }
    _buildEditIcon(item) {
        const icoComplete = document.createElement("div");
        icoComplete.classList.add("icon");
        let svg = svgBuilder("text-box-edit-outline", "M10 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H19C20.11 3 21 3.89 21 5V10.33C20.7 10.21 20.37 10.14 20.04 10.14C19.67 10.14 19.32 10.22 19 10.37V5H5V19H10.11L10 19.11V21M7 9H17V7H7V9M7 17H12.11L14 15.12V15H7V17M7 13H16.12L17 12.12V11H7V13M21.7 13.58L20.42 12.3C20.21 12.09 19.86 12.09 19.65 12.3L18.65 13.3L20.7 15.35L21.7 14.35C21.91 14.14 21.91 13.79 21.7 13.58M12 22H14.06L20.11 15.93L18.06 13.88L12 19.94V22Z");
        icoComplete.appendChild(svg);

        icoComplete.addEventListener("click", () => {
            console.log(item);
        });
        return icoComplete;
    }
}