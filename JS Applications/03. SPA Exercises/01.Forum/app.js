import { render, html } from "../node_modules/lit-html/lit-html.js";


let cancelButton = document.querySelector(".cancel")
let postButton = document.querySelector(".public")

cancelButton.addEventListener("click", function(e){
    let topicNameElement = document.getElementById("topicName")
    let usernameElement = document.getElementById("username")
    let postTextElement = document.getElementById("postText")

    topicNameElement.value = ""
    usernameElement.value = ""
    postTextElement.value = ""
})


postButton.addEventListener("click", async function(e){
    let topicNameElement = document.getElementById("topicName")
    let usernameElement = document.getElementById("username")
    let postTextElement = document.getElementById("postText")

    let topicName = topicNameElement.value
    let username = usernameElement.value
    let postText = postTextElement.value

    if(![topicName, username, postText].every((entry) => entry != "")){
        alert("Please fill out all fields!")
        return
    }

    let objectPOST = {
        title: topicName,
        username: username,
        post: postText,
    }

    try {
        await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(objectPOST)
        })
    } 
    catch (error) {
      alert(error)  
    }
    rerender()
})

async function rerender(){
    let container = document.querySelector(".topic-container")
    try {
        let data = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`)
        let dataJSON = await data.json()
        console.log(dataJSON)
        let renderHTML = Object.values(dataJSON).map((entry) => html`
            <section>
                <h3>${entry.title}</h3>
                <p>Username: ${entry.username}</p>
            </section>
        `)
    } 
    catch (error) {
       alert(error) 
    }
}

rerender()


```
Im sorry what the fuck? Another barebones practice question without full details on what is required and what is asked of the developer to do!
No, im sorry, I am not going to decode bullshit. Im moving on. Its a generic fetch this data, then render it with lit html question anyway.
I know how to do that...
```