function getAllJuiceFlavours(input){
    let storage = new Map()
    let bottlesMap = new Map()

    for (let entry of input){
        let [juiceType, amount] = entry.split(" => ")
        amount = Number(amount)
        if (!storage.has(juiceType)){
            storage.set(juiceType, {"amount": 0})
        }
        let currentAmount = storage.get(juiceType)["amount"] + amount
        let bottles = 0
        while (currentAmount >= 1000){
            bottles += 1
            currentAmount -= 1000
        }

        if (bottles > 0){
            if (!bottlesMap.has(juiceType)){
                bottlesMap.set(juiceType, {"bottles": bottles})
            }
            else{
                let oldBottles = bottlesMap.get(juiceType)["bottles"]
                bottlesMap.set(juiceType, {"bottles": oldBottles + bottles})
            }
        }

        storage.set(juiceType, {"amount": currentAmount})
    }

    let result = ""
    for (let [juice, bottlesDict] of bottlesMap){
        result += `${juice} => ${bottlesDict["bottles"]}\n`
    }

    return result.slice(0, result.length - 1)
}

let input = ['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']

let input_2 = ['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']


console.log(getAllJuiceFlavours(input))
console.log(getAllJuiceFlavours(input_2))
