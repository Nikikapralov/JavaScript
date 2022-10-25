function solve() {
    let buttonOnScreen = document.querySelector("div[id=container] > button")
    let buttonClear = document.querySelector("section[id=archive] > button")
    buttonClear.addEventListener("click", function(){
        let allLIElements = Array.from(document.querySelectorAll("section[id=archive] > ul > li"))
        for (let element of allLIElements){
            element.remove()
        }
    })

    buttonOnScreen.addEventListener("click", function(e){
        e.preventDefault()

        let nameElement = document.querySelector("input[placeholder=Name]")
        let hallElement = document.querySelector("input[placeholder=Hall")
        let ticketPriceElement = document.querySelector("input[placeholder='Ticket Price']")

        let name = nameElement.value
        let hall = hallElement.value
        let ticketPrice = ticketPriceElement.value

        if (name != "" && hall != "" && !isNaN(ticketPrice)){
            let ulElement = document.querySelector("section[id=movies] > ul")
            let newListElement = document.createElement("li")
            let newSpanElement = document.createElement("span")
            newSpanElement.textContent = name
            let newStrongElement = document.createElement("strong")
            newStrongElement.textContent = `Hall: ${hall}`
            let newDivElement = document.createElement("div")
            let newStrongElementPrice = document.createElement("strong")
            newStrongElementPrice.textContent = Number(ticketPrice).toFixed(2)
            let newInputPlaceholderElement = document.createElement("input")
            newInputPlaceholderElement.setAttribute("placeholder", "Tickets Sold")
            let newButtonElement = document.createElement("button")
            newButtonElement.textContent = "Archive"

            newButtonElement.addEventListener("click", function(e){
                if(!isNaN(newInputPlaceholderElement.value)){
                    e.currentTarget.parentElement.parentElement.remove()
                    let total = newInputPlaceholderElement.value * ticketPrice
                    let archiveSectionUl = document.querySelector("section[id=archive] > ul")
                    let newListElementArchive = document.createElement("li")
                    let newSpanElementArchive = document.createElement("span")
                    newSpanElementArchive.textContent = name
                    let newStrongElementArchive = document.createElement("strong")
                    newStrongElementArchive.textContent = `Total amount: ${total.toFixed(2)}`
                    let newButtonDeleteElement = document.createElement("button")
                    newButtonDeleteElement.textContent = "Delete"
                    newButtonDeleteElement.addEventListener("click", function(e){
                        e.target.parentElement.remove()
                    })

                    newListElementArchive.appendChild(newSpanElementArchive)
                    newListElementArchive.appendChild(newStrongElementArchive)
                    newListElementArchive.appendChild(newButtonDeleteElement)
                    
                    archiveSectionUl.appendChild(newListElementArchive)


                }
            })

            newDivElement.appendChild(newStrongElementPrice)
            newDivElement.appendChild(newInputPlaceholderElement)
            newDivElement.appendChild(newButtonElement)

            newListElement.appendChild(newSpanElement)
            newListElement.appendChild(newStrongElement)
            newListElement.appendChild(newDivElement)

            ulElement.appendChild(newListElement)

        }

        nameElement.value = ""
        ticketPriceElement.value = ""
        hallElement.value = ""


    })

    
}


