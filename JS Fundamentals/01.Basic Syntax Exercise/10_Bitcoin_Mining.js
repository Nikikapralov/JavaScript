function Mine(gold_mined_per_day){
    let total_money = 0
    let bitcoins = 0
    let first_day = undefined
    let price = 11949.16
    for (let i = 1; i <= gold_mined_per_day.length; i++){
        let day = gold_mined_per_day[i - 1]
        if (i % 3 == 0){
            day *= 0.70
        }
        total_money += day * 67.51
        while (total_money >= price){
            bitcoins += 1
            if (bitcoins == 1){
                first_day = i
            }
            total_money -= price
        }


    }
    console.log(`Bought bitcoins: ${bitcoins}`)
    if (bitcoins){
        console.log(`Day of the first purchased bitcoin: ${first_day}`)
    }
    console.log(`Left money: ${total_money.toFixed(2)} lv.`)

}
Mine([100,200,300])
Mine([50, 100])
Mine([3124.15, 504.212, 2511.124])