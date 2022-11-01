function validate() {
    let inputField = document.getElementById("email")
    inputField.addEventListener("change", function(e){
        let email = inputField.value
        let correctEmail = email.match(/^[a-z]+@[a-z]+\.[a-z]+$/)
        console.log(correctEmail)
        if (correctEmail == null){
            inputField.classList.add("error")
        }
        else {
            inputField.classList.remove("error")
        }
    })
}