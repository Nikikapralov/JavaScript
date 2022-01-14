function solve(array){
    let current = array[0]
    let result = []
    for (let item of array){
        if (item >= current){
            result.push(item)
            current = item
        }
    }
    return result
}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))