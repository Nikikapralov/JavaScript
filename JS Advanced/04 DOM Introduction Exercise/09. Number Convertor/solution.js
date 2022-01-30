function solve() {
    let selectMenuToElement = document.getElementById("selectMenuTo")
    selectMenuToElement.children[0].setAttribute("value", "binary")
    selectMenuToElement.children[0].textContent = "Binary"
    let newElemet = selectMenuToElement.children[0].setAttribute("value", "hexadecimal")
    newElemet.textContent = "Hexadecimal"
    selectMenuToElement.append(newElemet)
}