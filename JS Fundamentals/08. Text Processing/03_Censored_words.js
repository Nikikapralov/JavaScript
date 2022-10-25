function censor(sentence, word){
    return sentence.replace(word, "*".repeat(word.length))
}

let input = ["A small sentence with some words", "small"]

console.log(censor(...input))