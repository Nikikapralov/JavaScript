async function loadRepos() {
    let reposListElement = document.getElementById("repos")
    let username = document.getElementById("username").value
    try {
        let responseRepos = await fetch(`https://api.github.com/users/${username}/repos`)
        let dataRepos = await responseRepos.json()
        for (let item of dataRepos){
            let newListElement = document.createElement("li")
            let newHyperlink = document.createElement("a")
            newHyperlink.textContent = item.full_name
            newHyperlink.href = item.html_url
            newListElement.appendChild(newHyperlink)
            reposListElement.appendChild(newListElement)
        }
    }

    catch (error) {
        let newListElement = document.createElement("li")
        let newHyperlink = document.createElement("a")
        newHyperlink.textContent = "Error 404"
        newHyperlink.href = "#"
        newListElement.appendChild(newHyperlink)
        reposListElement.appendChild(newListElement)
    }


}