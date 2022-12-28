let buttonRegister = document.querySelector("button.register")
let buttonLogin = document.querySelector("button.login")

buttonRegister.addEventListener("click", async function(e){
    e.preventDefault()
    let emailElement = document.querySelector(".register[name=email]")
    let passwordElement = document.querySelector(".register[name=password]")
    let confirmPasswordElement = document.querySelector(".register[name=rePass]")

    let email = emailElement.value
    let password = passwordElement.value
    let confirmPassword = confirmPasswordElement.value

    if (![email, password, confirmPassword].every((entry) => entry != "")){
        alert("Please fill all the fields!")
        return
    }

    if (password != confirmPassword){
        alert("Password and confirm password do not match!")
        return
    }

    let objectPOST = {
        email: email,
        password: password
    }

    try {
        await fetch("http://localhost:3030/users/register", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(objectPOST)
        })
    }
    catch (error) {
        console.log(error)
        alert(error)
    }

    emailElement.value = ""
    passwordElement.value = ""
    confirmPasswordElement.value = ""
})


buttonLogin.addEventListener("click", async function(e){
    e.preventDefault()
    let emailElement = document.querySelector(".login[name=email]")
    let passwordElement = document.querySelector(".login[name=password]")

    let email = emailElement.value
    let password = passwordElement.value

    if (![email, password].every((entry) => entry != "")){
        alert("Please fill all the fields!")
        return
    }

    let objectPOST = {
        email: email,
        password: password
    }

    try {
        let data = await fetch("http://localhost:3030/users/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(objectPOST)
        })

        let dataJSON = await data.json()
        if (dataJSON.code == 403){
            alert("Password or email don't match!")
            return
        }
        localStorage.setItem("user", JSON.stringify({
            email: dataJSON.email,
            accessToken: dataJSON.accessToken,
            id: dataJSON._id
        }))

    }
    catch (error) {

        alert(error)
    }

    window.location.replace("home.html")

})