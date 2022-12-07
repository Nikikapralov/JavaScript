window.addEventListener("load", solve);

function solve() {
    let fieldFirstName = document.getElementById("first-name")
    let fieldLastName = document.getElementById("last-name")
    let fieldAge = document.getElementById("age")
    let fieldDescription = document.getElementById("task")
    let fieldGender = document.getElementById("genderSelect")
    let buttonSubmit = document.getElementById("form-btn")
    let buttonClear = document.getElementById("clear-btn")
    let counterElement = document.getElementById("progress-count")
    let inProgressTab = document.getElementById("in-progress")
    let finishedTab = document.getElementById("finished")

    function clearInputFields(){
        fieldFirstName.value = ""
        fieldAge.value = ""
        fieldDescription.value = ""
        fieldLastName.value = ""
        fieldGender.selectedIndex = 0
    }
    buttonClear.addEventListener("click", function(e){
        while (finishedTab.children){
            finishedTab.removeChild(finishedTab.children[0])
        }
    })

    buttonSubmit.addEventListener("click", function(e){
        e.preventDefault()

        let age = fieldAge.value
        let description = fieldDescription.value
        let firstName = fieldFirstName.value
        let lastName = fieldLastName.value
        let gender = fieldGender.selectedIndex

        if ([fieldAge.value, fieldDescription.value, fieldFirstName.value, fieldLastName.value].some( (el) => el == "")){
            return
        }

        let listElement = document.createElement("li")
        listElement.classList.add("each-line")

        let articleElement = document.createElement("article")

        let titleH4 = document.createElement("h4")
        titleH4.textContent = `${fieldFirstName.value} ${fieldLastName.value}`

        let paragraphUser = document.createElement("p")
        paragraphUser.textContent = `${fieldGender.selectedOptions[0].value}, ${fieldAge.value}`

        let paragraphDescription = document.createElement("p")
        paragraphDescription.textContent = `Dish description: ${fieldDescription.value}`

        let editButton = document.createElement("button")
        editButton.textContent = "Edit"
        editButton.classList.add("edit-btn")

        editButton.addEventListener("click", function(e){
            fieldAge.value = age
            fieldDescription.value = description
            fieldFirstName.value = firstName
            fieldLastName.value = lastName
            fieldGender.selectedIndex = gender

            counterElement.textContent = Number(counterElement.textContent) - 1
            listElement.parentNode.removeChild(listElement)
        })

        let completeButton = document.createElement("button")
        completeButton.textContent = "Mark as complete"
        completeButton.classList.add("complete-btn")

        completeButton.addEventListener("click", function(e){
            completeButton.parentNode.removeChild(completeButton)
            editButton.parentNode.removeChild(editButton)
            listElement.parentNode.removeChild(listElement)
            finishedTab.appendChild(listElement)
            counterElement.textContent = Number(counterElement.textContent) - 1
        })

        articleElement.appendChild(titleH4)
        articleElement.appendChild(paragraphUser)
        articleElement.appendChild(paragraphDescription)
        articleElement.appendChild(editButton)
        articleElement.appendChild(completeButton)
        listElement.appendChild(articleElement)

        inProgressTab.appendChild(listElement)

        counterElement.textContent = Number(counterElement.textContent) + 1

        clearInputFields()
    })
}
