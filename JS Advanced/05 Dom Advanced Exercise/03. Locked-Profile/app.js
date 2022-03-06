function lockedProfile() {
    let allButtonsElements = document.getElementsByTagName("button")
    for (let button of Array.from(allButtonsElements)){
        button.addEventListener("click", function(e){
            let inputElements = Array.from(e.currentTarget.parentElement.getElementsByTagName("input"))
            let inputLocksElements = inputElements.filter((a) => a.type == "radio")
            let checkedButton = inputLocksElements.filter((a) => a.checked == true)
            if (checkedButton[0].value == "lock"){
                return
            }
            else{
                let hiddenFieldsElement = e.currentTarget.parentElement.querySelector("input ~ div")
                if (hiddenFieldsElement.style.display == "block"){
                    e.currentTarget.textContent = "Show more"
                    hiddenFieldsElement.style.display = "none"
                }
                else{
                    e.currentTarget.textContent = "Hide it"
                    hiddenFieldsElement.style.display = "block"
                }

            }

        })
    }
}