function calculatePrice(input, regex){
    let matches = []
    for (let command of input){
        if (command == "Purchase"){
            return formatResult(matches)
        }
        let currentMatch = command.match(regex)
        if (currentMatch){
            matches.push(currentMatch)
        }
    }
    
}

let regex = />>(?<item>[A-Za-z]+)<<(?<price>(\d+(?:\.\d+)?))!(?<quantity>\d+)/
let input = [">>Sofa<<312.23!3",
">>TV<<300!5",
">Invalid<<!5",
"Purchase"]

console.log(calculatePrice(input, regex))

function formatResult(matches){
    let result = 'Bought furniture: \n'
    let totalMoney = 0
    for (let entry of matches){
        let item = entry.groups.item
        let price = entry.groups.price
        let quantity = entry.groups.quantity
        totalMoney += price * quantity
        result += `${item}\n`
    }
    result += `Total money spent: ${totalMoney}`
    return result
}