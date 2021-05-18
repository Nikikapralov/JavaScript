function login(array){
    let tries = 0
    let username = array[0]
    let correct_password = username.split('').reverse().join('')
    for (let i = 1; i < array.length; i++){
        let password = array[i]
        if (password == correct_password){
            console.log(`User ${username} logged in.`)
            return
        }
        else{
            if (tries < 3){
            console.log(`Incorrect password. Try again.`)
            tries += 1
            }
            else{
                console.log(`User ${username} blocked!`)
                return
            }

        }
    }
}
login(['Acer','login','go','let me in','recA'])