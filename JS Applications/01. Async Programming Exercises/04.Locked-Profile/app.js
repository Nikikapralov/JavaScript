async function lockedProfile() {
    let mainElement = document.getElementById("main")

    async function getProfilesData(){
        try{
            let profilesData = await fetch("http://localhost:3030/jsonstore/advanced/profiles")
            let profilesDataJson = await profilesData.json()
            return await profilesDataJson
        }
        catch (error){
            console.log("Error")
        }

        throw new Error("Data not found.")
    }

    function buildProfile(profileData){
        let classDiv = document.createElement("div")
        classDiv.classList.add("profile")

        let image = document.createElement('img')
        image.src = "./iconProfile2.png"
        image.classList.add("userIcon")

        let labelLock = document.createElement("label")
        labelLock.textContent = "Lock"

        let inputLocked = document.createElement("input")
        inputLocked.type = "radio"
        inputLocked.name = `${profileData.username}Locked`
        inputLocked.value = "lock"
        inputLocked.checked = true

        let labelUnlock = document.createElement("label")
        labelUnlock.textContent = "Unlock"

        let inputUnlocked = document.createElement("input")
        inputUnlocked.type = "radio"
        inputUnlocked.name = `${profileData.username}Locked`
        inputUnlocked.value = "unlock"
        inputUnlocked.checked = false

        let br = document.createElement("br")
        let hr = document.createElement("hr")

        let usernameLabel = document.createElement("label")
        usernameLabel.textContent = "Username"

        let usernameInput = document.createElement("input")
        usernameInput.type = "text"
        usernameInput.name = `${profileData.username}Username`
        usernameInput.value = `${profileData.username}`
        usernameInput.disabled = true
        usernameInput.readOnly = true

        let hiddenFieldsDiv = document.createElement("div")
        hiddenFieldsDiv.id = `${profileData.username}HiddenFields`
        hiddenFieldsDiv.style.display = "none"

        let emailLabel = document.createElement("label")
        emailLabel.textContent = "Email"

        let emailInput = document.createElement("input")
        emailInput.type = "email"
        emailInput.name = `${profileData.username}Email`
        emailInput.value = `${profileData.email}`
        emailInput.disabled = true
        emailInput.readOnly = true

        let ageLabel = document.createElement("label")
        ageLabel.textContent = "Age"

        let ageInput = document.createElement("input")
        ageInput.type = "text"
        ageInput.name = `${profileData.username}Age`
        ageInput.value = `${profileData.age}`
        ageInput.disabled = true
        ageInput.readOnly = true

        let buttonShowMore = document.createElement("button")
        buttonShowMore.textContent = "Show more"

        buttonShowMore.addEventListener("click", function (e){
            if (!inputLocked.checked){
                if (hiddenFieldsDiv.style.display == "none"){
                    hiddenFieldsDiv.style.display = "block"
                    e.target.textContent = "Hide it"
                }
                else{
                    hiddenFieldsDiv.style.display = "none"
                    e.target.textContent = "Show more"
                }
            }
        })

        hiddenFieldsDiv.appendChild(hr)
        hiddenFieldsDiv.appendChild(emailLabel)
        hiddenFieldsDiv.appendChild(emailInput)
        hiddenFieldsDiv.appendChild(ageLabel)
        hiddenFieldsDiv.appendChild(ageInput)


        classDiv.appendChild(image)
        classDiv.appendChild(labelLock)
        classDiv.appendChild(inputLocked)
        classDiv.appendChild(labelUnlock)
        classDiv.appendChild(inputUnlocked)
        classDiv.appendChild(br)
        classDiv.appendChild(hr)
        classDiv.appendChild(usernameLabel)
        classDiv.appendChild(usernameInput)
        classDiv.appendChild(hiddenFieldsDiv)
        classDiv.appendChild(buttonShowMore)

        return classDiv

    }

    let profilesData = await getProfilesData()
    console.log(profilesData)
    for (let [_, profileData] of Object.entries(profilesData)){
        console.log(profileData)
        let profileElement = buildProfile(profileData)
        mainElement.appendChild(profileElement)
    }
}