function calculateScore(input){
    let entries = input.split(" ")
    let totalScore = 0
    for (let entry of entries){
        let currentScore = 0
        let number = Number(entry.match(/\d+/))
        let [first, last] = entry.split(number.toString())
        if (first.charCodeAt() >= 65 && first.charCodeAt() <= 90){
            let alphabetPositon = first.charCodeAt() - 64
            currentScore += number / alphabetPositon
        }
        else if (first.charCodeAt() >= 97 && first.charCodeAt() <= 122){
            let alphabetPositon = first.charCodeAt() - 96
            currentScore += number * alphabetPositon
        }
        if (last.charCodeAt() >= 65 && last.charCodeAt() <= 90){
            let alphabetPositon = last.charCodeAt() - 64
            currentScore -= alphabetPositon

        }
        else if (last.charCodeAt() >= 97 && last.charCodeAt() <= 122){
            let alphabetPositon = last.charCodeAt() - 96
            currentScore += alphabetPositon
        }
    totalScore += currentScore
    }
    return totalScore
}

let input_2 = 'P34562Z q2576f H456z'
let input = 'A12b s17G'
let input_3 = 'a1A'
console.log(calculateScore(input))
console.log(calculateScore(input_2))
console.log(calculateScore(input_3))