function addItem() {
    let unorderedListElement = document.getElementById("items")
    let text = document.getElementById("newItemText").value
    document.getElementById("newItemText").value = ""
    let newListElement = document.createElement("li")
    newListElement.textContent = text
    let newAElement = document.createElement("a")
    newAElement.textContent = "[Delete]"
    newAElement.setAttribute("href", "#")
    newListElement.appendChild(newAElement)
    unorderedListElement.appendChild(newListElement)
    newAElement.addEventListener("click", function (e){
        let toDelete = e.currentTarget.parentNode
        toDelete.remove()
    })
}