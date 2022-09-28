function getNeighborhoodData(input){
    let neighborhoods = input.shift().split(", ")
    let peopleData = input
    let hashmap = getNeighborhoodMap(peopleData, neighborhoods)
    let orderedNeighborhoodData = Object.entries(hashmap).sort((a, b) => b[1].length - a[1].length)
    let result = formatResult(orderedNeighborhoodData)
    return result
}

function getNeighborhoodMap(peopleData, neighborhoods){
    let hashmap = {}
    neighborhoods.forEach(element => {
        hashmap[element] = []
    });

    for (let entry of peopleData){
        let [neighborhood, personName] = entry.split(" - ")
        if (neighborhoods.includes(neighborhood)){
            hashmap[neighborhood].push(personName)
        }
    }

    return hashmap
}

function formatResult(data){
    result = ""
    for (let entry of data){
        result += `${entry[0]}: ${entry[1].length}\n`
        for (let person of entry[1]){
            result += `--${person}\n`
        }
    }
    return result
}

let input = ['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']

console.log(getNeighborhoodData(input))

