import { projectsData } from "./data.js";

const projectsListNode = document.getElementById("projectsList");

console.log(projectsData);

function createListItem(item) {
    const listItem = document.createElement("li");
    listItem.className = "list-item";

    const listItemLink = document.createElement("a");
    listItemLink.className = "project-link";
    listItemLink.innerHTML = item.name;
    listItemLink.href = item.link;
    listItemLink.target = "_blank";

    const listItemDescr = document.createElement("p");
    listItemDescr.className = "project-description";
    listItemDescr.innerHTML = item.description;

    listItem.appendChild(listItemLink);
    listItem.appendChild(listItemDescr);

    console.log("listItem: ", listItem);
    return listItem;
}

let list = "";
projectsData.forEach((element) => {
    const newElement = createListItem(element);
    console.log(newElement);
    projectsListNode.appendChild(newElement);
});
