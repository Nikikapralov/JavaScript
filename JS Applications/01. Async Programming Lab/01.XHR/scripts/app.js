async function loadRepos() {
    let resDiv = document.getElementById("res")
    let response = await fetch("https://api.github.com/users/testnakov/repos")
    let data = await response.json()
    resDiv.textContent = JSON.stringify(data)

}