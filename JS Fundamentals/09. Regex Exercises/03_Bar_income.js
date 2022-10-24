function calculateIncome(input, regex){
    let total = 0
    for (let entry of input){
        if (entry == "end of shift"){
            return `Total income: ${total.toFixed(2)}`
        }
        let currentMatch = entry.match(regex)
        if (currentMatch){
            let name = currentMatch.groups.name
            let item = currentMatch.groups.item
            let quantity = Number(currentMatch.groups.quantity)
            let price = Number(currentMatch.groups.price)
            let totalPayed = price * quantity
            total += totalPayed
            console.log(`${name}: ${item} - ${totalPayed.toFixed(2)}`)
        }
    }
}

function formatResult(){
    let result = ""
    return result
}

let regex = /([^%\.\$\|])*%(?<name>[A-Z][a-z]+)%([^%\.\$\|])*<(?<item>[A-Z][a-z]+)>([^%\.\$\|])*\|(?<quantity>\d+)\|([^%\.\$\|0-9])*(?<price>\d+(?:\.\d+)?)\$([^%\.\$\|])?/

let input = ["%George%<Croissant>|2|10.3$",
"%Peter%<Gum>|1|1.3$",
"%Maria%<Cola>|1|2.4$",
"end of shift"]

let input_2 = [
"%Peter%<Gum>1.3$",
"%InvalidName%<Croissant>|2|10.3$",
"%Maria%<Cola>|1|2.4",
"%Valid%<Valid>valid|10|valid20$",
"end of shift",
]
console.log(calculateIncome(input, regex))
console.log(calculateIncome(input_2, regex))