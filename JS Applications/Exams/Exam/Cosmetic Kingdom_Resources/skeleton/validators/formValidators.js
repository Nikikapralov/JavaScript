export function noEmptyFields(data){
    for (let field of Object.values(data)){
        if (field.length == 0){
            throw new Error("You must not leave any empty fields.")

        }
    }
    return true
}

export function passwordsMatch(data){

    let password = data.password
    let confPassword = data["re-password"]

    if (password != confPassword){
        throw new Error("Password must match.")
    }

    return true

}