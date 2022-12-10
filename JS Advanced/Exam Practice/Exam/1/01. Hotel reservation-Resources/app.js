window.addEventListener('load', solve);

function solve() {
    let firstNameElement = document.getElementById("first-name")
    let lastNameElement = document.getElementById("last-name")
    let dateInElement = document.getElementById("date-in")
    let dateOutElement = document.getElementById("date-out")
    let peopleCountElement = document.getElementById("people-count")
    let submitButton = document.getElementById("next-btn")
    let infoListElement = document.getElementsByClassName("info-list")[0]
    let confirmListElement = document.getElementsByClassName("confirm-list")[0]
    let verificationH1Element = document.getElementById("verification")

    console.log(confirmListElement)

    let firstName = undefined
    let lastName = undefined
    let dateIn = undefined
    let dateOut = undefined
    let peopleCount = undefined

    function clear(){
        firstNameElement.value = ""
        lastNameElement.value = ""
        dateInElement.value = ""
        dateOutElement.value = ""
        peopleCountElement.value = ""
    }

    function validate(){
        if ([firstName, lastName, dateIn, dateOut, peopleCount].some((el) => el == "")){
            return false
        }

        let dateInDate = new Date(dateIn)
        let dateOutDate = new Date(dateOut)
        
        if ((dateOutDate.getTime() - dateInDate.getTime()) < 0){
            return false
        }

        return true
    }

    submitButton.addEventListener("click", function(e){
        e.preventDefault()

        firstName = firstNameElement.value
        lastName = lastNameElement.value
        dateIn = dateInElement.value
        dateOut = dateOutElement.value
        peopleCount = peopleCountElement.value

        if (!validate()){
            return
        }
        
        clear()

        submitButton.disabled = true

        let listItem = document.createElement("li")
        listItem.classList.add("reservation-content")

        let article = document.createElement("article")

        let h3 = document.createElement('h3')
        h3.textContent = `Name: ${firstName} ${lastName}`

        let pFrom = document.createElement("p")
        pFrom.textContent = `From date: ${dateIn}`
        
        let pTo = document.createElement("p")
        pTo.textContent = `To date: ${dateOut}`

        let pPeople = document.createElement("p")
        pPeople.textContent = `For ${peopleCount} people`

        let editButton = document.createElement("button")
        editButton.classList.add("edit-btn")
        editButton.textContent = "Edit"

        editButton.addEventListener("click", function(e){

            listItem.parentNode.removeChild(listItem)
            submitButton.disabled = false
            firstNameElement.value = firstName
            lastNameElement.value = lastName
            dateInElement.value = dateIn
            dateOutElement.value = dateOut
            peopleCountElement.value = peopleCount

            })

        let continueButton = document.createElement("button")
        continueButton.classList.add("continue-btn")
        continueButton.textContent = "Continue"

        continueButton.addEventListener("click", function(){
            listItem.parentNode.removeChild(listItem)

            let listItemConfirm = document.createElement("li")
            listItemConfirm.classList.add("reservation-content")
    
            let articleContinue = document.createElement("article")
    
            let h3Continue = document.createElement('h3')
            h3Continue.textContent = `Name: ${firstName} ${lastName}`
    
            let pFromContinue = document.createElement("p")
            pFromContinue.textContent = `From date: ${dateIn}`
            
            let pToContinue = document.createElement("p")
            pToContinue.textContent = `To date: ${dateOut}`
    
            let pPeopleContinue = document.createElement("p")
            pPeopleContinue.textContent = `For ${peopleCount} people`

            let confirmButton = document.createElement("button")
            confirmButton.classList.add("confirm-btn")
            confirmButton.textContent = "Confirm"

            confirmButton.addEventListener("click", function(e){
                listItemConfirm.parentNode.removeChild(listItemConfirm)
                submitButton.disabled = false
                verificationH1Element.classList.add("reservation-confirmed")
                verificationH1Element.classList.remove("reservation-cancelled")
                verificationH1Element.textContent = "Confirmed."
            })

            let cancelButton = document.createElement("button")
            cancelButton.classList.add("cancel-btn")
            cancelButton.textContent = "Cancel"

            cancelButton.addEventListener("click", function(e){
                listItemConfirm.parentNode.removeChild(listItemConfirm)
                submitButton.disabled = false
                verificationH1Element.classList.add("reservation-cancelled")
                verificationH1Element.classList.remove("reservation-confirmed")
                verificationH1Element.textContent = "Cancelled."
            })

            articleContinue.appendChild(h3Continue)
            articleContinue.appendChild(pFromContinue)
            articleContinue.appendChild(pToContinue)
            articleContinue.appendChild(pPeopleContinue)

            listItemConfirm.appendChild(articleContinue)
            listItemConfirm.appendChild(confirmButton)
            listItemConfirm.appendChild(cancelButton)

            confirmListElement.appendChild(listItemConfirm)

            


        })

        article.appendChild(h3)
        article.appendChild(pFrom)
        article.appendChild(pTo)
        article.appendChild(pPeople)

        listItem.appendChild(article)
        listItem.appendChild(editButton)
        listItem.appendChild(continueButton)

        infoListElement.appendChild(listItem)



    })
}



    
    
