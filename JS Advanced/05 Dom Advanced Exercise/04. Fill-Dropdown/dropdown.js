function addItem() {
    let textElement = document.getElementById("newItemText")
    let valueElement = document.getElementById("newItemValue")
    let text = textElement.value
    let val = valueElement.value
    let menuOfOptions = document.getElementById("menu")
    let newOptionElement = document.createElement("option")
    newOptionElement.textContent = text
    newOptionElement.value = val
    menuOfOptions.appendChild(newOptionElement)
    valueElement.value = ""
    textElement.value = ""
}