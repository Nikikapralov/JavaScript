function compute(array){
    console.log(array.reduce((a, b) => a + b))
    let result = 0
    for (item of array){
        result += 1/item
    }
    console.log(result)
    console.log(array.join(""))
}

compute([1, 2, 3])