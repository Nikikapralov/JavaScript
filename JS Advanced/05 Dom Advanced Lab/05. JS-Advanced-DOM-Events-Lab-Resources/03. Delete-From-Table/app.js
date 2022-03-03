function deleteByEmail() {
    let errorDisplayElement = document.getElementById("result")
    let emailTableRowElements = document.querySelectorAll("tr")
    let emailElements = []
    for (let element of emailTableRowElements){
        let toPush = element.querySelectorAll("td:nth-child(2)")[0]
        if (toPush != undefined){
            emailElements.push(toPush)
        }
    }
    let emailToDelete = document.getElementsByName("email")[0].value
    document.getElementsByName("email")[0].value = ""
    let emailTableRowToEmailTextContentElementsObject = {}
    for (let element of emailElements){
        emailTableRowToEmailTextContentElementsObject[element.textContent] = element.parentNode
    }
    if (Object.keys(emailTableRowToEmailTextContentElementsObject).includes(emailToDelete)){
        emailTableRowToEmailTextContentElementsObject[emailToDelete].remove()
        errorDisplayElement.textContent = "Deleted."
    }

    else{
        errorDisplayElement.textContent = "Not found."
    }
}