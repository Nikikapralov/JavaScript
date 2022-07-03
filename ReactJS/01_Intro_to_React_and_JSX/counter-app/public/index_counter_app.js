let buttonContainer = document.getElementById("btn-container")
buttonContainer.addEventListener("click", function(e){
    let counterEl = document.getElementById("counter")
    let counter = counterEl.textContent

    if (e.target.id == "down" || Array.from(e.target.classList).includes("fa-arrow-down")){
        counter--
        counterEl.textContent = counter
        changeColour(counter, counterEl)
    }

    else if (e.target.id == "up" || Array.from(e.target.classList).includes("fa-arrow-up")){
        counter++
        counterEl.textContent = counter
        changeColour(counter, counterEl)
    }

    else {
        counter = 0
        counterEl.textContent = counter
        changeColour(counter, counterEl)
    }
})

function changeColour(counter, counterEl){
    if (counter < 0){
        counterEl.style.color = "orangered"
    }
    else if (counter > 0){
        counterEl.style.color = "green"
     }
    else {
        counterEl.style.color = "white"
    }
}