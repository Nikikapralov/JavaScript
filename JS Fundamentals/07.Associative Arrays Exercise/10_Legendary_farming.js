function farm(input){
    let materials = {"shards": 0, "motes": 0, "fragments": 0}
    let junk = {}
    let requirements = {"shards": "Shadowmourne",
                        "fragments": "Valanyr",
                        "motes": "Dragonwrath"}

    let data = getInput(input)
    let enoughMaterials = checkMaterials(materials)
    while (!enoughMaterials){
        let amount = Number(data.shift())
        let type = data.shift().toLowerCase()
        if (!Object.keys(materials).includes(type)){
            !Object.keys(junk).includes(type) ? junk[type] = amount : junk[type] += amount
            continue
        }
        materials[type] += amount
        enoughMaterials = checkMaterials(materials)
    }
    let winner = requirements[enoughMaterials]
    materials[enoughMaterials] -= 250
    let ordered = Object.entries(materials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    junk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]))

    return formatResult(winner, ordered, junk)
} 

let input = '3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
let input_2 = '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'

function checkMaterials(materials){
    for (let material in materials){
        if (materials[material] >= 250){
            return material
        }
    }
    return false
}

function getInput(data){
    return data.split(" ")
}

function formatResult(winner, materials, junk){
    let result = `${winner} obtained!\n`
    for (let [material, amount] of materials){
        result += `${material}: ${amount}\n`
    }
    for (let [junky, amount] of junk){
        result += `${junky}: ${amount}\n`
    }
    return result
}
console.log(farm(input))
console.log(farm(input_2))