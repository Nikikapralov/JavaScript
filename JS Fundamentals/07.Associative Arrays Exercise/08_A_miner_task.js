function mine(input){
    let resources = {}
    for (let i = 0; i < input.length; i+=2){
        let entry = input[i]
        if (!Object.keys(resources).includes(entry)){
                resources[entry] = 0
        }
        resources[entry] += Number(input[i + 1])
    }
    let result = formatResult(resources)
    return result
}


let input = [
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]

let input_2 = [
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
function formatResult(data){
    let result = ``
    for (let [material, amount] of Object.entries(data)){
        result += `${material} -> ${amount}\n`
    }
    return result
}

console.log(mine(input))
console.log(mine(input_2))