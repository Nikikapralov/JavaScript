function matchPhoneNumber(numbers, regex){
    let result = numbers.match(regex)
    return result.join(", ")
}

let numbers = "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
let regex = /(^|[ ])\+359(?<interval>\s|-)2(\k<interval>)\d{3}(\k<interval>)\d{4}\b/g
console.log(matchPhoneNumber(numbers, regex))