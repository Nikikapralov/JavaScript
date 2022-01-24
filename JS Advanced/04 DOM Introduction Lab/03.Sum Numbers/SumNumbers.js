function calc() {
    let inputOne = Number(document.getElementById("num1").value)
    let inputTwo = Number(document.getElementById("num2").value)
    let result = inputOne + inputTwo
    let resultDom = document.getElementById("sum")
    resultDom.value = result
}
