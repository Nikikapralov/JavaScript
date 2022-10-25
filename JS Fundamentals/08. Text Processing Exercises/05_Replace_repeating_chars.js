function replaceChars(input){
    let result = ""
    let previousLetter = ""
    for (let letter of input){
        if (letter !== previousLetter){
            result += letter
            previousLetter = letter
        }
    }
    return result
}

let input = 'aaaaabbbbbcdddeeeedssaa'
let input_2 = 'qqqwerqwecccwd'

console.log(replaceChars(input))
console.log(replaceChars(input_2))