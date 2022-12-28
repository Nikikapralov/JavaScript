import { getUser, rerender } from "./utils.js"


let buttonCreate = document.querySelector(".create")

buttonCreate.addEventListener("click", async function(e){
    e.preventDefault()
    let nameElement = document.querySelector("[name=name]")
    let priceElement = document.querySelector("[name=price]")
    let factorElement = document.querySelector("[name=factor]")
    let imgElement = document.querySelector("[name=img]")

    let name = nameElement.value
    let price = priceElement.value
    let factor = factorElement.value
    let img = imgElement.value

    let objectPOST = {
        name: name,
        price: price,
        factor: factor,
        img: img
    }

    try {
        await fetch(`http://localhost:3030/data/furniture`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-Authorization": getUser().accessToken
            },
            body: JSON.stringify(objectPOST)
        })
    } 
    catch (error) {
        alert(error)
    }
    
    rerender()

})

rerender()