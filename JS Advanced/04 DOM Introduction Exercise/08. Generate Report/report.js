function generateReport() {
    let tHeadElement = document.getElementsByTagName("thead")[0]
    let tableHeaderButtons = tHeadElement.getElementsByTagName("th")
    let buttons = []

    //const headers= document.querySelectorAll('thead tr th');
    //console.log(headers[0].children[0])

    for (let i = 0; i < tableHeaderButtons.length; i++){

        let current = {
            "button": tableHeaderButtons[i].querySelector("*"),
            "name": tableHeaderButtons[i].querySelector("*").name,
            "index": i
        }
        buttons.push(current)
    }

    let buttonActive = buttons.filter(currentButton => currentButton["button"].checked)
    let elementBody = document.getElementsByTagName("tbody")[0]
    let data = getTableData(elementBody, buttonActive)
    let getElementOutput = document.getElementById("output")
    getElementOutput.textContent = data




    function getTableData(elementBody, buttonActive){
        result = []
        let trContainers = Array.from(elementBody.getElementsByTagName("tr"))
        for (let container of trContainers){
            let dataForPerson = {}
            let tdList = container.getElementsByTagName("td")
            for (let i = 0; i < buttonActive.length; i++){
                dataForPerson[buttonActive[i]["name"]] = tdList[buttonActive[i]["index"]].textContent
            }
            result.push(dataForPerson)
        }
        return JSON.stringify(result)
    }
}