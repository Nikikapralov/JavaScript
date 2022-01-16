function solve(array){
    let result = {}
    for (let item of array){
        let [name, price] = item.split(" : ")
        price = Number(price)
        result[name] = price
    }
    let resultEntries = Object.entries(result)
    let sorted = resultEntries.sort((a, b) => a[0].localeCompare(b[0]))
    result = {}
    for (let item of sorted){
        if (result.hasOwnProperty(item[0][0])){
            result[item[0][0]].push(item)
        }
        else{
            result[item[0][0]] = [item]
        }
    }
    for (let key in result){
        console.log(key)
        for (let tuple of result[key]){
            console.log(` ${tuple[0]}: ${tuple[1]}`)
        }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)