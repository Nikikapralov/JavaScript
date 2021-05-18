function Price(amount, group, day){
    let price = undefined
    if (day == 'Friday'){
        if (group == 'Students'){
            price = 8.45
        }
        else if (group == 'Business'){
            price = 10.90
        }
        else if (group == 'Regular'){
            price = 15
        }

    }
    else if (day == 'Saturday'){
        if (group == 'Students'){
            price = 9.80
        }
        else if (group == 'Business'){
            price = 15.60
        }
        else if (group == 'Regular'){
            price = 20
        }

    }
    else if (day == 'Sunday'){
        if (group == 'Students'){
            price = 10.46
        }
        else if (group == 'Business'){
            price = 16
        }
        else if (group == 'Regular'){
            price = 22.50
        }

    }
    let total_price = amount * price
    if (group == 'Students' && amount >= 30){
        total_price *= 0.85
    }
    else if (group == 'Business' && amount >= 100){
        total_price -= 10 * price
    }
    else if (group == 'Regular' && (10 <= amount && amount <= 20)){
        total_price *= 0.95
    }
console.log(`Total price: ${total_price.toFixed(2)}`)

}
Price(40,
    "Regular",
    "Saturday"
    )