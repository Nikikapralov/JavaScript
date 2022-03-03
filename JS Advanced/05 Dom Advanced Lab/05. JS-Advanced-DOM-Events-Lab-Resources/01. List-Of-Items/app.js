function addItem() {
    let unorderedListContainerElement = document.getElementById("items")
    let newItemTextElement = document.getElementById("newItemText")
    let newElementName = newItemTextElement.value
    newItemTextElement.value = ""
    let listElementToAdd = document.createElement("li")
    listElementToAdd.textContent = newElementName
    unorderedListContainerElement.appendChild(listElementToAdd)
}