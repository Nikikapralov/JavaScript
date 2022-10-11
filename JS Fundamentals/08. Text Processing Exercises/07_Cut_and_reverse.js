function cutReverse(input){
    let middleIndex = Math.floor(input.length / 2)
    let firstWord = input.slice(0, middleIndex)
    let secondWord = input.slice(middleIndex)
    firstWord = Array.from(firstWord).reverse().join("")
    secondWord = Array.from(secondWord).reverse().join("")
    return firstWord + `\n` + secondWord
}

let input = 'tluciffiDsIsihTgnizamAoSsIsihT'
let input_2 = 'sihToDtnaCuoYteBIboJsihTtAdooGoSmI'

console.log(cutReverse(input))
console.log(cutReverse(input_2))