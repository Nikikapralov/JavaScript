function extractText() {
    let listItems = document.getElementsByTagName("li")
    let textArea = document.getElementById("result")
    for (let item of listItems){
        textArea.textContent += item.textContent + "\n"
    }
}