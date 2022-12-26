import { render, html } from "../node_modules/lit-html/lit-html.js";


function attachEvents() {
    let ulElement = document.getElementById("phonebook")
    let loadButton = document.getElementById("btnLoad")
    let createButton = document.getElementById("btnCreate")
    let personElement = document.getElementById("person")
    let phoneElement = document.getElementById("phone")

    async function renderElements(){
        try {
            let data = await fetch("http://localhost:3030/jsonstore/phonebook")
            let dataJSON = await data.json()
            let htmlData = html`
            ${Object.values(dataJSON).map((entry) => html`<li id=${entry._id}>${entry.person}: ${entry.phone} <button id=${entry._id} @click=${Delete}>Delete</button></li>`)}
            `
            render(htmlData, ulElement)
        } 
        catch (error) {
            console.log(error)
        }

    }

    async function Delete(e){
        let toDeleteId = e.target.id
        try {
            await fetch(`http://localhost:3030/jsonstore/phonebook/${toDeleteId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        
            renderElements()

        } 
        catch (error) {
            console.log(error)
        }

    }

    loadButton.addEventListener("click", async function(e){
        renderElements()
    })

    createButton.addEventListener("click", async function(e){
        let personData = personElement.value
        let phoneData = phoneElement.value
        let createObject = {
            phone: phoneData,
            person: personData
        }
        try {

            await fetch(`http://localhost:3030/jsonstore/phonebook`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(createObject)
    
            })
            
        } 
        catch (error) {
           console.log(error) 
        }

        renderElements()
        personElement.value = ""
        phoneElement.value = ""
    })
}

attachEvents();