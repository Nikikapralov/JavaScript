[
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]

function storeCheck(stock, ordered){
    let currentStock = {}
    for (let i = 0; i < stock.length; i++){
        if ( (i % 2) == 0){
            currentStock[stock[i]] = 0
        }
        else{
            currentStock[stock[i-1]] = Number(stock[i])
        }
    }
    for (let i = 0; i < ordered.length; i++){
        if ( (i % 2) == 1){
            if (stock.includes(ordered[i - 1])){
                currentStock[ordered[i - 1]] += Number(ordered[i])
            }
            else{
                currentStock[ordered[i-1]] = Number(ordered[i])
            }
        }
    }
    for (let [item, amount] of Object.entries(currentStock)){
        console.log(`${item} -> ${amount}`)
    }
}

storeCheck([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])