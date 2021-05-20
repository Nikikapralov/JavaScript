function calculate(distance, passengers, price){
    let consumptionForTrip = (distance / 100) * 7
    consumptionForTrip += passengers * 0.100
    let moneyNeeded = consumptionForTrip * price
    console.log(`Needed money for that trip is ${moneyNeeded}lv.`)
}

calculate(260, 9, 2.49)