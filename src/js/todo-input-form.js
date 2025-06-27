
export { addFormElement };

function addFormElement() {
    const formDisplay = _buildScreenHider();
    formDisplay.appendChild(_buildForm());
    const body = document.body;
    body.insertBefore(formDisplay, body.firstChild);
}

function _buildScreenHider() {
    const hider = document.createElement("div");
    hider.classList.add("screen-hider");
    return hider;
}

function _buildForm() {
    const form = document.createElement("form");
    form.setAttribute("action", "#");
    form.setAttribute("id", "item-form");

    /* title input */
    const titleInput = document.createElement("div");
    titleInput.classList.add("form-element");

    let label = document.createElement("label");
    label.setAttribute("for", "item-titl");
    label.innerText = "Title";

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "item-title");
    input.setAttribute("name", "title");

    titleInput.appendChild(label);
    titleInput.appendChild(input);

    /* date input */
    const dateInput = document.createElement("div");
    dateInput.classList.add("form-element");

    label = document.createElement("label");
    label.setAttribute("for", "item-date");
    label.innerText = "Due Date";

    input = document.createElement("input");
    input.setAttribute("type", "date");
    input.setAttribute("id", "item-date");
    input.setAttribute("name", "date");

    dateInput.appendChild(label);
    dateInput.appendChild(input);

    /* description input */
    const descInput = document.createElement("div");
    descInput.classList.add("form-element");

    label = document.createElement("label");
    label.setAttribute("for", "item-description");
    label.innerText = "Description";

    input = document.createElement("textarea");
    input.setAttribute("id", "item-description");
    input.setAttribute("name", "desc");

    descInput.appendChild(label);
    descInput.appendChild(input);

    /* buttons */

    const buttons = document.createElement("div");
    buttons.classList.add("form-element");

    const btnCancel = document.createElement("button");
    btnCancel.setAttribute("type", "button");
    btnCancel.classList.add("todo-cancel-btn");
    btnCancel.innerText = "Cancel";
    
    const btnClear = document.createElement("button");
    btnClear.setAttribute("type", "reset");
    btnClear.classList.add("todo-clear-btn");
    btnClear.innerText = "Clear";

    const btnAdd = document.createElement("button");
    btnAdd.setAttribute("type", "submit");
    btnAdd.classList.add("todo-add-btn");
    btnAdd.innerText = "Add";

    buttons.appendChild(btnCancel);
    buttons.appendChild(btnClear);
    buttons.appendChild(btnAdd);
    
    /* bring it together */

    form.appendChild(titleInput);
    form.appendChild(dateInput);
    form.appendChild(descInput);
    form.appendChild(buttons);

    return form;
}