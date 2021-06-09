function calculate(item, amount){
    switch (item){
        case 'coffee':
            total = amount * 1.50
            break
        case 'water':
            total = amount * 1.00
            break
        case 'coke':
            total = amount * 1.40
            break
        case 'snacks':
            total = amount * 2.00
            break
    }
    console.log(total.toFixed(2))
}