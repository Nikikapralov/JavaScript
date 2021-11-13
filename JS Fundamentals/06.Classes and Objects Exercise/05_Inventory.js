function generateInventory(array){
    let heroes = []
    for (let entry of array){
        let currentHero = {}
        let nameAgeItems = entry.split(" / ")
        currentHero['name'] = nameAgeItems[0]
        currentHero['level'] = nameAgeItems[1]
        currentHero['items'] = nameAgeItems[2].split(', ').sort((a, b) => a.localeCompare(b))
        console.log(currentHero["items"])
        heroes.push(currentHero)
    }
    let ordered_heroes = heroes.sort((a, b) => a['level'] - b['level'])
    for (let hero of ordered_heroes){
        console.log(`Hero: ${hero['name']}`)
        console.log(`level => ${hero['level']}`)
        console.log(`items => ${hero['items'].join(', ')}`)
    }
}



generateInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])
    