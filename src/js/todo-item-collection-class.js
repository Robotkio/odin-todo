import { TodoItem } from "./todo-item-class";
export { TodoItemCollection };

const defaultCollectionName = "todo-item-collection";

class TodoItemCollection {
    constructor (id = defaultCollectionName) {
        this._id = id;
        this._items = new Array();
    }
    set id(value) {
        this._id = new String(value);
    }
    get id() {
        return this._id;
    }
    get items() {
        return this._items;
    }
    addItem(item) {
        if (item instanceof TodoItem) {
            this._items.push(item);
        }
    }
    addNewItem(title, desc, date, id = null) {
        let item = new TodoItem(title, desc, date, id);
        this.addItem(item);
    }
    removeItemByID(id) {
        for(let i = 0; i < this._items.length; i++) {
            if(this._items[i].id === id) {
                this._items.splice(i, 1);
                break;
            }
        }
    }
    clearItems() {
        this._items = new Array();
    }
    saveToLocalStorage() {
        localStorage.setItem(this.id, JSON.stringify(this._items));
    }
    loadFromLocalStorage() {
        let jsonItems;
        if (jsonItems = JSON.parse(localStorage.getItem(this.id))) {
            jsonItems.forEach((i) => {
                while(this.idInUse(i._id)) { 
                    i._id = crypto.randomUUID();
                }
                const item = new TodoItem(i._title, i._description, new Date(i._date), i._id);
                item.complete = i._complete;
                this.addItem(item);
            });
        }
    }
    idInUse(id) {
        for(let i = 0; i < this._items.length; i++) {
            if(this._items[i].id == id) {
                return true;
            }
        }
        return false;
    }
}