async function loadCommits() {
    let commitsListElement = document.getElementById("commits")
    while (commitsListElement.firstChild) {
        commitsListElement.firstChild.remove()
    }
    let username = document.getElementById("username").value
    let repo = document.getElementById("repo").value
    try {
        let responseRepos = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        let dataCommits = await responseRepos.json()
        console.log(dataCommits)
        for (let item of dataCommits){
            let newListElement = document.createElement("li")
            newListElement.textContent = `${item.author.login}: ${item.commit.message}`
            commitsListElement.appendChild(newListElement)
        }
    }

    catch (error) {
        let newListElement = document.createElement("li")
        newListElement.textContent = "Error: 404 (Not Found)"
        commitsListElement.appendChild(newListElement)
    }

}