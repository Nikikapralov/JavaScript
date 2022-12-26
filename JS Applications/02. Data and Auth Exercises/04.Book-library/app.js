import { render, html } from "../node_modules/lit-html/lit-html.js"

let formContainerElement = document.getElementById("form-container")
let loadButton = document.getElementById("loadBooks")
let tableContainer = document.getElementsByTagName("tbody")[0]

let normalFormRender = html`
    <form>
        <h3>FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <button @click=${Submit}>Submit</button>
    </form>
`

render(normalFormRender, formContainerElement)


function Save(id){
    async function wrap(e){
        e.preventDefault()
        let titleElement = document.querySelector("[name=title]")
        let authorElement = document.querySelector("[name=author]")
        let titleUpdated = titleElement.value
        let authorUpdated = authorElement.value
        let objectPOST = {
            author: authorUpdated,
            title: titleUpdated
        }
        try {
            await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(objectPOST)
            })
            
        } 
        catch (error) {
            console.log(error)
        }

        render(normalFormRender, formContainerElement)
        rerender()
    }
    return wrap

}

function Edit(title, author, id){
    async function wrap(e){
        e.preventDefault()
        let formEditHTML = html`
            <form>
        <h3>Edit FORM</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." value="${title}">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." value="${author}">
        <button @click=${Save(id)}>Save</button>
    </form>
        `
        render(formEditHTML, formContainerElement)
    }
    return wrap
}

function Delete(id){
    async function wrap(e){
        try {
            await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
                method: "DELETE"
            })
            rerender()
        } 
        catch (error) {
           console.log(error) 
        }
    }
    return wrap
}

loadButton.addEventListener("click", async function(e){
   rerender()

})

async function Submit(e){
    e.preventDefault()
    try {
        let titleElement = document.querySelector("[name=title]")
        let authorElement = document.querySelector("[name=author]")
        let titleUpdated = titleElement.value
        let authorUpdated = authorElement.value
        let objectPOST = {
            author: authorUpdated,
            title: titleUpdated
        }
        await fetch(`http://localhost:3030/jsonstore/collections/books/`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(objectPOST)
        })
        rerender()

    }
    catch (error) {
        console.log(error)
    }
}

async function rerender(){
    try {
        let data = await fetch(`http://localhost:3030/jsonstore/collections/books`)
        let dataJSON = await data.json()
        let dataToRender = html`${Object.entries(dataJSON).map((key, entry) => html`
                 <tr>
                <td>${key[1].title}</td>
                <td>${key[1].author}</td>
                <td>
                    <button @click=${Edit(key[1].title, key[1].author, key[0])}>Edit</button>
                    <button @click=${Delete(key[0])}>Delete</button>
                </td>
        </tr>
        `)}
        `
        render(dataToRender, tableContainer)
    }
    catch (error) {
        console.log(error)
    }
}