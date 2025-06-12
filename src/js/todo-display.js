import "todo-data.js";

export { makeItem };

function makeItem(item) {
    if (!(item instanceof Item)) {
        return false;
    }
    
}