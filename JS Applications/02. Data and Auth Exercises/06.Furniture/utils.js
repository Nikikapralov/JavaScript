import { render, html } from "../node_modules/lit-html/lit-html.js"

export function getUser(){
    let user = localStorage.getItem("user")
    if (user == undefined){
        return undefined
    }
    user = JSON.parse(user)
    return user
}

export function isLoggedIn(){
    let user = getUser()
    if (user){
        return true
    }
    return false
}

export function applyLoginPolicy(){
    if (isLoggedIn()){
        window.location.replace("homeLogged.html")
    }
}

export async function rerender(){
    try {
        let container = document.getElementsByTagName("tbody")[0]
        let data = await fetch("http://localhost:3030/data/furniture")
        let dataJSON = await data.json()
        let displayHTML = dataJSON.map((entry) => html`
            <tr>
                                            <td>
                                                <img
                                                    src="${entry.img}">
                                            </td>
                                            <td>
                                                <p>${entry.name}</p>
                                            </td>
                                            <td>
                                                <p>${entry.price}</p>
                                            </td>
                                            <td>
                                                <p>${entry.factor}</p>
                                            </td>
                                            <td>
                                                <input type="checkbox" disabled/>
                                            </td>
                                        </tr>
        `)

        render(displayHTML, container)
    } 
    catch (error) {
        alert(error)
    }
}