function perfectNumber(number){
    let divisors = []
    for (let i = 1; i < number; i++){
        if (number % i == 0){
            divisors.push(i)
        }
    }
    let result = divisors.reduce((a, b) => a + b)
    if (result == number){
        return 'We have a perfect number!'
    }
    return "It's not so perfect."
}

console.log(perfectNumber(1236498))