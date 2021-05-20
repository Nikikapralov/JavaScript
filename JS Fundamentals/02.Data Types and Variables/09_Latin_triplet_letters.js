function getLatin(number){
    for (let i = 0; i < number; i++){
        for (let n = 0; n < number; n++){
            for (let a = 0; a < number; a++){
                console.log(String.fromCharCode(97 + i) + String.fromCharCode(97 + n) + String.fromCharCode(97 + a))
    
            }
        }
    }

}
getLatin(3)