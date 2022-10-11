function decode(words, string){
    words = words.split(", ")
    let coded = words.map((a) => "*".repeat(a.length))
    for (let word of words){
        for (let stars of coded){
            if (word.length == stars.length){
                string = string.replace(stars, word)
                    break
            }
        }
    }
    return string
}

let input = ['great, for',
'softuni is ***** place *** learning new programming languages *******']
let input_2 = ['great, learning',
'softuni is ***** place for ******** new programming languages']

console.log(decode(...input))
console.log(decode(...input_2))