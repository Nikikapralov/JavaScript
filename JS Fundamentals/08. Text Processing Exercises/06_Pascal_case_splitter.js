function splitter(input){
    let words = []
    let currentWord = ""
    for (let i = 0; i < input.length; i++){
        if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90){
            if (currentWord){
                words.push(currentWord)
                currentWord = ""
            }
        }
        currentWord += input[i]
    }
    words.push(currentWord)
    return words.join(", ")
}

let input = 'SplitMeIfYouCanHaHaYouCantOrYouCan'
let input_2 = 'HoldTheDoor'
let input_3 = 'ThisIsSoAnnoyingToDo'

console.log(splitter(input))
console.log(splitter(input_2))
console.log(splitter(input_3))