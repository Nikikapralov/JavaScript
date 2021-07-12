function passwordValidator(password){
    let is_valid = true
    let is_enough_int = false
    let messages = []
    let int_count = 0
    if (password.length < 6 || password.length > 10){
        messages.push('Password must be between 6 and 10 characters')
        is_valid = false
    }
    for (let char of password){
        if(char.match(/^[0-9a-zA-Z]+$/)){
        continue
        }
   else{
        messages.push('Password must consist only of letters and digits')
        is_valid = false
        break
        }
    }
    for (let char of password){
        if (isNaN(char) === false){
            int_count += 1
            if (int_count == 2){
                is_enough_int = true
                break
            }
        }
    }
    if (is_enough_int === false){
        messages.push('Password must have at least 2 digits')
    }
    if (messages.length == 0){
        console.log('Password is valid')
    }
    else{
        for (let message of messages){
            console.log(message)
        }
    }
}

passwordValidator('Pa$s$s')