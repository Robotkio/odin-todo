class CoreNoteAspects {
    static validPriorities = ["high", "medium", "low"];

    constructor(title, description, dueDate, priority, color) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.color = color;
        this.id = crypto.randomUUID();
    }
    set id(val) {
        if (typeof val === 'string') {
            this.id = val;
            return true;
        } else {
            return false;
        }
    }
    get id() {
        return id;
    }
    set title(val) {
        if (typeof val === 'string') {
            this.title = val;
            return true;
        } else {
            return false;
        }
    }
    get title() {
        return this.title;
    }
    set description(val) {
        if (typeof val === 'string') {
            this.description = val;
            return true;
        } else {
            return false;
        }
    }
    get description() {
        return this.description;
    }
    set dueDate(val) {
        this.dueDate = val;
    }
    get dueDate() {
        return this.dueDate;
    }
    set priority(val) {
        if (validPriorities.includes(val)) {
            this.priority = val;
            return true;
        } else {
            return false;
        }
    }
    get priority() {
        return this.priority;
    }
    set color(val) {
        this.color = val;
    }
    get color() {
        return this.color;
    }
}

class Item extends CoreNoteAspects{
    constructor(title, description, dueDate, priority, color) {
        super(title, description, dueDate, priority, color);
        this.complete = false;
        this.notes = [];
        this.project = null;
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
    addNote(note) {
        if (note instanceof Note) {
            this.notes.push(note);
            return true;
        } else {
            return false;
        }
    }
    removeNote(id) {
        for (let i = 0; i < this.notes.length; i++) {
            if(this.notes[i].id === id) {
                this.notes.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    get notes() {
        return notes;
    }
    set project(project) {
        if (project instanceof Project || project === null) {
            this.project = project;
            return true;
        } else {
            return false;
        }
    }
    get project() {
        return project;
    }
    get projects() {
        return projects;
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