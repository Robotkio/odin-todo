export { svgBuilder };

function svgBuilder(title, d) {
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