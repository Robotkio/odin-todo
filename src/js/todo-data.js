export { Item, Note, Project };

class CoreNoteAspects {
    static validPriorities = ["high", "medium", "low"];

    constructor(title, description, dueDate, priority, color) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._color = color;
        this._id = crypto.randomUUID();
    }
    set id(val) {
        if (typeof val === 'string') {
            this._id = val;
            return true;
        } else {
            return false;
        }
    }
    get id() {
        return _id;
    }
    set title(val) {
        if (typeof val === 'string') {
            this._title = val;
            return true;
        } else {
            return false;
        }
    }
    get title() {
        return this._title;
    }
    set description(val) {
        if (typeof val === 'string') {
            this._description = val;
            return true;
        } else {
            return false;
        }
    }
    get description() {
        return this._description;
    }
    set dueDate(val) {
        this._dueDate = val;
    }
    get dueDate() {
        return this._dueDate;
    }
    set priority(val) {
        if (validPriorities.includes(val)) {
            this._priority = val;
            return true;
        } else {
            return false;
        }
    }
    get priority() {
        return this._priority;
    }
    set color(val) {
        this._color = val;
    }
    get color() {
        return this._color;
    }
}

class Item extends CoreNoteAspects{
    constructor(title, description, dueDate, priority, color) {
        super(title, description, dueDate, priority, color);
        this._complete = false;
        this._notes = [];
        this._project = null;
    }
    set complete(val) {
        if (typeof val === 'boolean') {
            this._complete = val;
            return true;
        } else {
            return false;
        }
    }
    get complete() {
        return this._complete;
    }
    addNote(note) {
        if (note instanceof Note) {
            this._notes.push(note);
            return true;
        } else {
            return false;
        }
    }
    removeNote(id) {
        for (let i = 0; i < this.notes.length; i++) {
            if(this._notes[i].id === id) {
                this._notes.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    get notes() {
        return _notes;
    }
    set project(project) {
        if (project instanceof Project || project === null) {
            this._project = project;
            return true;
        } else {
            return false;
        }
    }
    get project() {
        return this._project;
    }
}

class Project extends CoreNoteAspects {
    constructor(title, description, dueDate, priority, color) {
        super(title, description, dueDate, priority, color);
        this.items = [];
    }
    addItem(item) {
        if (item instanceof Item) {
            this.items.push(item);
            return true;
        } else {
            return false;
        }
    }
    removeItem(itemID) {
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].id === itemID) {
                this.items.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    get items() {
        return this.items;
    }
}

class Note {
    constructor(note) {
        this.note = note;
        this.complete = false;
    }
    set note(val) {
        if (typeof val === "string") {
            this.note = val;
            return true;
        } else { 
            return false;
        }
    }
    get note() {
        return this.note;
    }
    set complete(val) {
        if (typeof val === 'boolean') {
            this.complete = val;
            return true;
        } else {
            return false;
        }
    }
    get complete() {
        return this.complete;
    }
}