function products(array){
    let products_sorted = array.sort()
    for (let i = 0; i < products_sorted.length; i++){
        console.log(`${i + 1}.${products_sorted[i]}`)
    }
}

products(["Potatoes", "Tomatoes", "Onions", "Apples"])