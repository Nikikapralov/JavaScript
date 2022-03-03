function validate() {
    let inputElement = document.getElementById("email")
    inputElement.addEventListener("change", function(e){
        let string = inputElement.value 
        let checkForAtt = string.split("@")
        if (checkForAtt.length != 2){
            e.currentTarget.className = "error"
            return  
        }
        let checkForPoint = checkForAtt[1].split(".")
        if (checkForPoint.length != 2){
            e.currentTarget.className = "error"
            return
        }
        let testCharsAscii = [...checkForPoint, checkForAtt[0]]
        for (word of testCharsAscii){
            for (letter of word){
                if (letter.charCodeAt(0) < 97 || letter.charCodeAt > 122){
                    e.currentTarget.className = "error"
                    return
                }
            }
        }
        e.currentTarget.className = ""
    })
}