function solve(array){
    let result = {}
    for (let item of array){
        let [town, product, price] = item.split(" | ")
        price = Number(price)
        if (!Object.keys(result).includes(product)){
            result[product] = {"price": price, "town": town}
        }
        else{
            let currentLowest = result[product]["price"]
            if (currentLowest > price){
                result[product]["price"] = price
                result[product]["town"] = town
            }
        }
    }
    for (let product in result){
        console.log(`${product} -> ${result[product]["price"]} (${result[product]["town"]})`)
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)