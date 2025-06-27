
export { todoForm };

const todoForm = (function () {
    function addFormElementToPage() {
        const formDisplay = _buildScreenHider();
        formDisplay.appendChild(_buildAddForm());
        const body = document.body;
        body.insertBefore(formDisplay, body.firstChild);
    }
    function addAddButtonToPage() {
        const showForm = document.createElement("button");
        showForm.classList.add("show-input-form-btn");
        showForm.setAttribute("type", "button");
        showForm.innerText = "Add";
        document.body.insertBefore(showForm, document.body.firstChild);
    }
    function hideScreen() {
        const form = document.querySelector(".screen-hider");
        form.classList.remove("hide");
        form.classList.add("show");
    }
    function showScreen() {
        const form = document.querySelector(".screen-hider");
        form.classList.remove("show");
        form.classList.add("hide");
    }
    function clearForm() {
        document.getElementById("item-form");
    }
    function _buildScreenHider() {
        const hider = document.createElement("div");
        hider.classList.add("screen-hider");
        hider.classList.add("hide");
        return hider;
    }

    function _buildAddForm() {
        const form = document.createElement("form");
        form.setAttribute("action", "#");
        form.setAttribute("id", "item-form");

        /* title input */
        const titleInput = document.createElement("div");
        titleInput.classList.add("form-element");

        let label = document.createElement("label");
        label.setAttribute("for", "item-title");
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

    return { addFormElementToPage, addAddButtonToPage, showForm: hideScreen, hideForm: showScreen }
})();