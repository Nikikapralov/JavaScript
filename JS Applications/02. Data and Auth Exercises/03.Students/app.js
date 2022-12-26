import { render, html } from "../node_modules/lit-html/lit-html.js"


let firstNameElement = document.querySelector("[name=firstName]")
let lastNameElement = document.querySelector("[name=lastName]")
let facultyNumberElement = document.querySelector("[name=facultyNumber]")
let gradeElement = document.querySelector("[name=grade]")
let submitButton = document.getElementById("submit")
let tableElement = document.getElementById("results")


function notEmpty(value){
    return value != ''
}

submitButton.addEventListener("click", async function(e){
    e.preventDefault()
    let firstName = firstNameElement.value
    let lastName = lastNameElement.value
    let facultyNumber = facultyNumberElement.value
    let grade = gradeElement.value

    let data = [facultyNumber, firstName, lastName, grade]

    if (data.every(notEmpty)){
        let dataObject = {
            firstName: firstName,
            lastName: lastName,
            facultyNumber: facultyNumber,
            Grade: grade
        }
        try {
            await fetch(`http://localhost:3030/jsonstore/collections/students`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataObject)
            })
        }
        catch (error) {
            console.log(error)
        }
        
        try {
            let data = await fetch(`http://localhost:3030/jsonstore/collections/students`)
            let dataJSON = await data.json()
            console.log(Object.values(dataJSON))
            let toRenderHTML = html`
            ${Object.values(dataJSON).map((entry) => html`
            <tr>
                <td>
                    ${entry.firstName}
                </td>
                <td>
                    ${entry.lastName} 
                </td>
                <td>
                    ${entry.facultyNumber}
                </td>
                <td>
                    ${entry.Grade}
                </td>
            </tr>
            `)}
            `
            render(toRenderHTML, tableElement)
        } 
        catch (error) {
            console.log(error)
        }
        firstNameElement.value = ""
        lastNameElement.value = ""
        gradeElement.value = ""
        facultyNumberElement.value = ""

    }
})
