function toggle() {
    let getElementButton = document.getElementsByClassName("button")[0]
    let text = getElementButton.textContent
    let getElementDiv = document.getElementById("extra")
    if (text == "More"){
        getElementDiv.style.display = "block"
        getElementButton.textContent = "Less"
    }
    else{
        getElementDiv.style.display = "none"
        getElementButton.textContent = "More"
    }
}