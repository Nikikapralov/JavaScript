function discover(input){
    let demons = []
    let demonNames = input.split(",")
    for (let name of demonNames){
        name = name.trim()
        let demon = {"name": name}
        demon.health = getHealth(name)
        demon.damage = getDamage(name)
        demons.push(demon)
    }
    let result = formatResult(demons)
    return result
}

let input = "M3ph-0.5s-0.5t0.0**"
let input_2 = "M3ph1st0**, Azazel"
let input_3 = "Gos/ho"

function getHealth(name){
let regex = /[^0-9\.\-+\*/]/g
    let health = 0
    let chars = name.match(regex)
    for (let char of chars){
        health += char.charCodeAt()
    }
    return health
}

function getDamage(name){
    let regex = /(?<value>-|\+)?(\d+(?:\.\d+)?)/g
    let numbers = name.match(regex)
    let damage = 0.00
    if (!numbers){
        return damage.toFixed(2)
    }    
    for (number of numbers){
        damage += Number(number)
    }
    for (let char of name){
        if (char == "*"){
            damage *= 2
        }
        else if (char == "/"){
            damage /= 2
        }
    }
    return damage.toFixed(2)
}

function formatResult(demons){
    let result = ""
    let orderedDemons = demons.sort((a, b) => a.name.localeCompare(b.name))
    for (let demon of orderedDemons){
        result += `${demon.name} - ${demon.health} health, ${demon.damage} damage\n`
    }
    return result
}

console.log(discover(input))
console.log(discover(input_2))
console.log(discover(input_3))