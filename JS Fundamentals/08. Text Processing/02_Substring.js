function getSubstring(string, index, count){
    return string.substring(index, count + 1)
}

let input = ["ASentance", 1, 8]

console.log(getSubstring(...input))
