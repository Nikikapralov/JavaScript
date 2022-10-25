function printChars(input){
    let result = ""
    Array.from(input).map((a) => result += `${a}\n`)
    return result
}

let input = 'AWord'

console.log(printChars(input))