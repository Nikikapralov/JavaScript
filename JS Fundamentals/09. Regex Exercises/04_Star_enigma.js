function decryptEnigma(input){
    let planets = {}
    const regex = /([^@\-!:>])*@(?<name>[A-Z][a-z]+)([^@\-!:>])*:(?<population>\d+)([^@\-!:>])*!(?<starType>[AD])!([^@\-!:>])*->(?<soldiers>\d+)([^@\-!:>])*/
    for (let message of input.slice(1)){
        let decryptedMessage = decryptMessage(message)
        let currentMatch = decryptedMessage.match(regex)
        if (!currentMatch){
            continue
        }
        let name = currentMatch.groups.name
        let population = currentMatch.groups.population
        let starType = currentMatch.groups.starType
        let soldiers = currentMatch.groups.soldiers
        planets[name] = {population: population, starType: starType, soldiers: soldiers, name: name}
        }
    let result = formatResult(planets)
    return result
}

let input = [3,
"tt(''DGsvywgerx>6444444444%H%1B9444",
"GQhrr|A977777(H(TTTT",
"EHfsytsnhf?8555&I&2C9555SR"]

let input_2 = ["2",
    "STCDoghudd4=63333$D$0A53333",
    "EHfsytsnhf?8555&I&2C9555SR"]

console.log(decryptEnigma(input))
console.log(decryptEnigma(input_2))

function decryptMessage(message){
    let totalCount = getTotalCount(message)
    let decryptedString = ''
    for (let letter of message){
        let decryptedLetter = String.fromCharCode(letter.charCodeAt() - totalCount)
        decryptedString += decryptedLetter
    }
    return decryptedString
}

function getTotalCount(message){
    const letters = ["s", "t", "a", "r"]
    let totalCount = 0
    for (let letter of letters){
        let regex = new RegExp(`${letter}`, 'g')
        let count = message.toLowerCase().match(regex)
        totalCount += count !== null ? count.length : 0
    }
    return totalCount
}

function formatResult(planets){
    let result = ''
    let attackPlanets = []
    let destroyedPlanets = []
    Object.values(planets).map((a) => a.starType == "A" ? attackPlanets.push(a) : destroyedPlanets.push(a))
    result += `Attacked planets: ${attackPlanets.length}\n`
    attackPlanets = attackPlanets.sort((a, b) => (a.name,localeCompare(b.name)))
    for (let planet of attackPlanets){
        result += `-> ${planet.name}\n`
    }
    result += `Destroyed planets: ${destroyedPlanets.length}\n`
    destroyedPlanets = destroyedPlanets.sort((a, b) => (a.name.localeCompare(b.name)))
    for (let planet of destroyedPlanets){
        result += `-> ${planet.name}\n`
    }
    return result
}
