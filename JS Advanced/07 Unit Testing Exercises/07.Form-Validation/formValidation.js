function validate() {
    let usernameField = document.getElementById("username")
    let emailField = document.getElementById("email")
    let passwordField = document.getElementById("password")
    let passwordConfirmField = document.getElementById("confirm-password")
    let companyCheckbox = document.getElementById("company")
    let companyInfoField = document.getElementById("companyInfo")
    let companyNumberField = document.getElementById("companyNumber")
    let submitButton = document.getElementById("submit")
    let showValid = document.getElementById("valid")
    let originalBorder = usernameField.style.border

    let listFieldsCompany = [usernameField, emailField, passwordConfirmField, passwordField, companyNumberField]
    let listFieldsNotCompany = [usernameField, emailField, passwordConfirmField, passwordField]

    function checkValidity(regex, e){
        let result = e.currentTarget.value.match(regex)
        if (result != null){
            e.currentTarget.style.border = "none"
        }
        else {
            e.currentTarget.style.border = originalBorder
            e.currentTarget.style.borderColor = "red"
        }
    }

    usernameField.addEventListener("change", function(e){
        let regex = /^[A-Za-z0-9]{3,20}$/
        checkValidity(regex, e)
    })

    emailField.addEventListener("change", function(e){
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        checkValidity(regex, e)

    })

    passwordField.addEventListener("change", function(e){
        let regex = /^[A-Za-z0-9_]{5,15}$/
        checkValidity(regex, e)
    })

    passwordConfirmField.addEventListener("change", function(e){
        let password = passwordField.value
        let currentPassword = passwordConfirmField.value
        if (password != currentPassword){
            e.currentTarget.style.border = originalBorder
            e.currentTarget.style.borderColor = "red"
        }
        else {
            e.currentTarget.style.border = "none"
        }
    })

    companyCheckbox.addEventListener("change", function(e){
        if (companyCheckbox.checked){
            companyInfoField.style.display = "block"
        }
        else {
            companyInfoField.style.display = "none"
        }
    })

    companyNumberField.addEventListener("change", function(e){
        let number = companyNumberField.value
        if (number >= 1000 && number <= 9999){
            e.currentTarget.style.border = "none"
        }
        else {
            e.currentTarget.style.border = originalBorder
            e.currentTarget.style.borderColor = "red"
        }
    })

    submitButton.addEventListener("click", function(e){
        e.preventDefault()
        if (companyCheckbox.checked){
            if (listFieldsCompany.every( (a) => a.style.border == "none") ){
                showValid.style.display = "block"
            }
            else {
                showValid.style.display = "none"
            }
        }
        else {
            if (listFieldsNotCompany.every( (a) => a.style.border == "none") ){
                showValid.style.display = "block"
            }
            else {
                showValid.style.display = "none"
            }
        }
    })

}

