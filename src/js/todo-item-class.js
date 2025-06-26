export { TodoItem };

class TodoItem{
    constructor (title, description, date, id = null) {
        this._title = title;
        this._description = description;
        this._date = date;
        this._id = id ? id : crypto.randomUUID();
        this._complete = false;
    }
    set title (val) {
        if(typeof val === "string") {
            this._title = val;
        } 
    } 
    get title() {
        return this._title;
    }
    set description (val) {
        if(typeof val === "string") {
            this._description = val;
        } 
    } 
    get description() {
        return this._description;
    }
    set date(val) {
        if(val instanceof Date) {
            this._date = val;
        }
    }
    get date() {
        return this._date;
    }
    set complete(val) {
        if(typeof val === "boolean") {
            this._complete = val;
        }
    }
    get complete() {
        return this._complete;
    }
    set id(val) {
        if(typeof val === "string") {
            this._id = val;
        } 
    } 
    get id() {
        return this._id;
    }
}
