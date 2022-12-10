function getCarCollection(input){
    let brandsMap = new Map()
    for (let entry of input){
        let [brand, model, price] = entry.split(" | ")
        price = Number(price)
        if (!brandsMap.has(brand)){
            brandsMap.set(brand, new Map())
            brandsMap.get(brand).set(model, price)

        }
        else {
            if (!brandsMap.get(brand).has(model)){
                brandsMap.get(brand).set(model, price)
            }
            else{
                let oldPrice = brandsMap.get(brand).get(model)
                brandsMap.get(brand).set(model, price + oldPrice)
            }
        }
    }

    let result = ""
    for (let [brand, map] of brandsMap){
        result += `${brand}\n`
        for (let [model, price] of map){
            result += `###${model} -> ${price}\n`
        }
    }

    return result.slice(0, result.length - 1)
}

let input = ['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']

console.log(getCarCollection(input))