function DivisibleBy(number){
    if (number % 10 == 0){
        console.log("The number is divisible by 10")
    }
    else if (number % 7 == 0){
        console.log('The number is divisible by 7')
    }
    else if (number % 6 == 0){
        console.log('The number is divisible by 6')
    }
    else if (number % 3 == 0){
        console.log('The number is divisible by 3')
    }
    else if (number % 2 == 0){
        console.log('The number is divisible by 2')
    }
    else(
        console.log("Not divisible")
    )
}

DivisibleBy(14)
DivisibleBy(30)
DivisibleBy(15)
DivisibleBy(12)
DivisibleBy(4)
DivisibleBy(17)