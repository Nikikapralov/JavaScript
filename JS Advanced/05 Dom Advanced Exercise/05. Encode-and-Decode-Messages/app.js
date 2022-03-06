function encodeAndDecodeMessages() {
    let disabledTextAreaElement = document.querySelector("textarea:disabled")
    let enabledTextAreaElement = document.querySelector("div textarea")
    let encodeButton = enabledTextAreaElement.parentElement.getElementsByTagName("button")[0]
    let decodeButton = disabledTextAreaElement.parentElement.getElementsByTagName("button")[0]
    encodeButton.addEventListener("click", function(e){
        text = enabledTextAreaElement.value
        let encodedText = ""
        for (let letter of text){
            let number = letter.charCodeAt() + 1
            encodedText += String.fromCharCode(number)
        }
        disabledTextAreaElement.value = encodedText
        enabledTextAreaElement.value = ""
    })
    decodeButton.addEventListener("click", function(e){
        let encodedText = disabledTextAreaElement.value
        let decodedText = ""
        for (let letter of encodedText){
            let number = letter.charCodeAt() - 1
            decodedText += String.fromCharCode(number)
        }
        enabledTextAreaElement.value = decodedText
        disabledTextAreaElement.value = ""

    })
}