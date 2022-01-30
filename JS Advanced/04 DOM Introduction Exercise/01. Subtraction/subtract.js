function subtract() {
    let firstElementValue = document.getElementById("firstNumber").value 
    let secondElementValue = document.getElementById("secondNumber").value
    firstElementValue = Number(firstElementValue)
    secondElementValue = Number(secondElementValue)
    let result = firstElementValue - secondElementValue
    let divElementResult = document.getElementById("result")
    divElementResult.textContent = result

}