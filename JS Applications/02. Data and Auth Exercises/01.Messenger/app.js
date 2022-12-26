function attachEvents() {
    let submitButton = document.getElementById("submit")
    let refreshButton = document.getElementById("refresh")
    let authorElement = document.querySelector("[name=author]")
    let messageElement = document.querySelector("[name=content]")
    let messagesElement = document.getElementById("messages")

    submitButton.addEventListener("click", async function(e){

        let currentAuthor = authorElement.value
        let currentMessage = messageElement.value
        
        let newObject = {
            author: currentAuthor,
            content: currentMessage
        }

        try {

            await fetch("http://localhost:3030/jsonstore/messenger",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObject)
            })
            
        }

        catch (error) {
            console.log(error)
        }

        authorElement.value = ""
        messageElement.value = ""
    })

    refreshButton.addEventListener("click", async function(e){
        messagesElement.textContent = ""
        try {
            let data = await fetch("http://localhost:3030/jsonstore/messenger")
            let dataJSON = await data.json()
            for (let [_, element] of Object.entries(dataJSON)){
                messagesElement.textContent += `${element.author}: ${element.content}\n`
            }
        } 
        catch (error) {
            console.log(error)
        }
    })

}

attachEvents();