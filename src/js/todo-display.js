import { Item, Note, Project } from "./todo-data.js";

export { makeItem };

const svgData = [];
/* completed checkboxes */
svgData["checkbox-blank-outline"] = { title: "checkbox-blank-outline", d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" };
svgData["checkbox-blank"] = { title: "checkbox-blank", d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" };
svgData["checkbox-marked"] = { title: "checkbox-marked", d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" };
svgData["checkbox-marked-outline"] = { title: "checkbox-marked-outline", d: "M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9" };
/* priority icons */
svgData["priority-low"] = { title: "circle", d: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" };
svgData["priority-medium"] = { title: "rhombus", d: "M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2Z" };
svgData["priority-high"] = { title: "octagram", d: "M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06" };
/* other icons */
svgData["cog"] = { title: "cog", d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" };
svgData["trash-can-outline"] = { title: "trash-can-outlin", d: "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13" };
svgData["text-box-edit-outline"] = { title: "text-box-edit-outline", d: "M10 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H19C20.11 3 21 3.89 21 5V10.33C20.7 10.21 20.37 10.14 20.04 10.14C19.67 10.14 19.32 10.22 19 10.37V5H5V19H10.11L10 19.11V21M7 9H17V7H7V9M7 17H12.11L14 15.12V15H7V17M7 13H16.12L17 12.12V11H7V13M21.7 13.58L20.42 12.3C20.21 12.09 19.86 12.09 19.65 12.3L18.65 13.3L20.7 15.35L21.7 14.35C21.91 14.14 21.91 13.79 21.7 13.58M12 22H14.06L20.11 15.93L18.06 13.88L12 19.94V22Z" };
svgData["file-document-plus-outlin"] = { title: "file-document-plus-outlin", d: "M23 18H20V15H18V18H15V20H18V23H20V20H23M6 2C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H13.81C13.45 21.38 13.2 20.7 13.08 20H6V4H13V9H18V13.08C18.33 13.03 18.67 13 19 13C19.34 13 19.67 13.03 20 13.08V8L14 2M8 12V14H16V12M8 16V18H13V16" };


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

    htmlItem.appendChild(header);
    htmlItem.appendChild(options);
    htmlItem.appendChild(description);
 
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



function _makeSVG( {title, d} ) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("todo-icon");
    svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox","0 0 24 24");
    const svgTitle = document.createElement("title");
    svgTitle.innerText = title;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d",d);
    svg.appendChild(svgTitle);
    svg.appendChild(path);
    return svg;
}