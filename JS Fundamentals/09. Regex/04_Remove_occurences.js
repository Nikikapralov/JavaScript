function removeOcc(occurence, text){
    while (text.includes(occurence)) {
        result = text.replace(occurence, "")
        text = result
    }
    return text
}

let input = ["ice", "kicegiciceeb"]
console.log(removeOcc(...input))
