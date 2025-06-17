import { Item, Note, Project } from "./todo-data.js";
import { makeSVG as _makeSVG, svgData } from "./common-tools.js";

export { makeItem };

function makeItem(item) {
    if (!(item instanceof Item)) {
        return false;
    }
    const htmlItem = document.createElement("div");
    htmlItem.classList.add("todo-item");

    const header = _makeItemHeader(item);
    const options = _makeItemOptions(item);
    const description = document.createElement("div");
    description.classList.add("todo-item-description");
    description.innerText = item.description;
    const notes = _makeAdditionalNotes(item);

    htmlItem.appendChild(header);
    htmlItem.appendChild(options);
    htmlItem.appendChild(description);
    htmlItem.appendChild(notes);
 
    return htmlItem;
}

function _makeItemHeader(item) {

    /* header */
    const header = document.createElement("header");

    /* todo-item-completed-icon */
    const completedIcon = document.createElement("div");
    completedIcon.classList.add("todo-item-completed-icon");
    if(item.complete) {
        completedIcon.appendChild(_makeSVG(svgData["checkbox-marked-outline"]));
    } else {
        completedIcon.appendChild(_makeSVG(svgData["checkbox-blank-outline"]));
    }

    /* todo-item-title */
    const headerTitle = document.createElement("div");
    headerTitle.classList.add("todo-item-title");
    headerTitle.innerText = item.title;

    /* todo-item-priority-icon */
    const priorityIcon = document.createElement("div");
    priorityIcon.classList.add("todo-item-priority-icon");
    switch(item.priority) {
        case "low":
            priorityIcon.appendChild(_makeSVG(svgData["priority-low"]));
            break;
        case "medium":
            priorityIcon.appendChild(_makeSVG(svgData["priority-medium"]));
            break;
        case "high":
        default:
            priorityIcon.appendChild(_makeSVG(svgData["priority-high"]));
            break;
    }

    header.appendChild(completedIcon);
    header.appendChild(headerTitle);
    header.appendChild(priorityIcon);

    return header;
}

function _makeItemOptions(item) {
    /* options container */
    const options = document.createElement("div");
    options.classList.add("todo-item-options");

    /* dueDate */
    const dueDate = document.createElement("div");
    dueDate.classList.add("todo-item-dueDate");
    dueDate.innerText = item.dueDate;

    /* Project */
    const project = document.createElement("div");
    project.classList.add("todo-item-project");
    if (item.project) {
        // console.log(item.project);
        project.innerText = item.project;
    } else {
        project.innerText = "No Project";
    }

    /* edit icon */
    const editIco = document.createElement("div");
    editIco.classList.add("todo-item-edit-icon");
    editIco.classList.add("edit-icon-open");
    editIco.appendChild(_makeSVG(svgData["cog"]))

    /* todo-item-edit-options */
    const editOptions = document.createElement("div");
    editOptions.classList.add("todo-item-edit-options");

    /* todo-item-edit-options-priority */
    const priority = document.createElement("div");
    priority.classList.add("todo-item-edit-options-priority");

    priority.appendChild(_makeSVG(svgData["priority-low"]));
    priority.appendChild(_makeSVG(svgData["priority-medium"]));
    priority.appendChild(_makeSVG(svgData["priority-high"]));
    priority.appendChild(_makeSVG(svgData["trash-can-outline"]));
    priority.appendChild(_makeSVG(svgData["text-box-edit-outline"]));

    const color = document.createElement("div");
    color.classList.add("todo-item-edit-options-color");
    ["blue", "green", "yellow", "orange", "red"].forEach((element) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("color-icon");
        colDiv.classList.add(element);
        color.appendChild(colDiv);
    });

    editOptions.appendChild(priority);
    editOptions.appendChild(color);
    
    options.appendChild(dueDate);
    options.appendChild(project);
    options.appendChild(editIco);
    options.appendChild(editOptions);

    return options;
}

function _makeAdditionalNotes(item) {
    /* header */
    const header = document.createElement("div");
    header.classList.add("todo-item-notes-header");

    /* header content*/
    const title = document.createElement("div");
    title.innerText = "Additional Notes:";
    const container = document.createElement("div");
    container.classList.add("todo-item-notes-container");

    header.appendChild(title);
    header.appendChild(_makeSVG(svgData["text-box-edit-outline"]));

    /* complete container */
    const itemNotes = document.createElement("div");
    itemNotes.classList.add("todo-item-notes");
    itemNotes.appendChild(header);
    itemNotes.appendChild(container);

    return itemNotes;
}