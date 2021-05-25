function totalSpice(startingYield){
    let total = 0
    let days = 0
    while (startingYield >= 100){
        days += 1
        total += startingYield - 26
        startingYield -= 10
    }
    total -= 26
    if (total < 0){
        total = 0
    }
    console.log(days)
    console.log(total)
}
totalSpice(90)