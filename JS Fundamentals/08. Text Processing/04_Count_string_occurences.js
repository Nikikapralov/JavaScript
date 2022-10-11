function countOccurences(string, searchWord){
    let result = 0
    string.split(" ").map((a) => a == searchWord ? result += 1 : result = result)
    return result
}

let input = ["This is a word and it also is a sentence",
"is"]

console.log(countOccurences(...input))