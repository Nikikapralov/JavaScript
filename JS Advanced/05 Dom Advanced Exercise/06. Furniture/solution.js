function solve() {
    let textAreaElements = document.querySelectorAll('div[id="exercise"] > textarea')
    let inputElement = textAreaElements[0]
    let outputElement = textAreaElements[1]
    let buttonElement = inputElement.nextElementSibling
    let tableElement = document.querySelector("table > tbody")
    let buyButtonElement = document.getElementsByTagName("button")
    console.log(outputElement)
    buyButtonElement = buyButtonElement[1]

    buttonElement.addEventListener("click", function(e){
        let input = inputElement.value 
        let inputJson = JSON.parse(input)
        for (let object of inputJson){
            let newTrElement = document.createElement("tr")


            let imageTd = document.createElement("td")
            let image = object.img
            let imgElement = document.createElement("img")
            imgElement.src = image
            imageTd.appendChild(imgElement)
            newTrElement.appendChild(imageTd)

            let nameTd = document.createElement("td")
            let name = object.name
            let pElement1 = document.createElement("p")
            pElement1.textContent = name
            nameTd.appendChild(pElement1)
            newTrElement.appendChild(nameTd)


            let priceTd = document.createElement("td")
            let price = Number(object.price)
            let pElement2 = document.createElement("p")
            pElement2.textContent = price
            priceTd.appendChild(pElement2)
            newTrElement.appendChild(priceTd)

            let decFacTd = document.createElement("td")
            let decFac = Number(object.decFactor)
            let pElement3 = document.createElement("p")
            pElement3.textContent = decFac
            decFacTd.appendChild(pElement3)
            newTrElement.appendChild(decFacTd)

            let radioTd = document.createElement("td")
            let inputElement = document.createElement("input")
            inputElement.type = "checkbox"
            radioTd.appendChild(inputElement)
            newTrElement.appendChild(radioTd)

            tableElement.appendChild(newTrElement)
        }
    })

    buyButtonElement.addEventListener("click", function(e){
        let allFurnitureBought = []
        let totalSum = 0
        let totalDecorationFactor = 0
        let checkedInputs = Array.from(document.querySelectorAll("input:checked"))
        for (let input of checkedInputs){
            let furnitureName = input.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.textContent
            let furniturePrice = Number(input.parentElement.previousElementSibling.previousElementSibling.firstChild.textContent)
            let decorationFactor = Number(input.parentElement.previousElementSibling.firstChild.textContent)
            allFurnitureBought.push(furnitureName)
            totalSum += furniturePrice
            totalDecorationFactor += decorationFactor
        }
        let resultDecFac = totalDecorationFactor / allFurnitureBought.length
        outputElement.textContent += `Bought furniture: ${allFurnitureBought.join(", ")}\n`
        outputElement.textContent += `Total price: ${totalSum.toFixed(2)}\n`
        outputElement.textContent += `Average decoration factor: ${resultDecFac}`

    })

}