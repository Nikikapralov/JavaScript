function travel(input){
    let countryTownCostMap = {}
    for (let entry of input){
        let [country, town, cost] = entry.split(" > ")
        if (!Object.keys(countryTownCostMap).includes(country)){
            countryTownCostMap[country] = {}
        }
        if (!Object.keys(countryTownCostMap[country]).includes(town)){
            countryTownCostMap[country][town] = cost
        }
        if (countryTownCostMap[country][town] >= cost){
            countryTownCostMap[country][town] = cost
        }
    }
    let destructured = Object.entries(countryTownCostMap).map((a) => [a[0], Object.entries(a[1])])
    let ordered = destructured.sort((a, b) => a[0].localeCompare(b[0])).map((a) => [a[0], a[1].sort((a, b) => a[1] - b[1])])
    let result = formatResult(ordered)
    return result
}

let input = [
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]

function formatResult(ordered){
    let result = ``
    for (let entry of ordered){
        let [country, townsCost] = entry
        result += `${country} > `
        for (let entry of townsCost){
            let [town, cost] = entry
            result += `${town} > ${cost} `
        }
        result += `\n`
    }
    return result
    
}

console.log(travel(input))