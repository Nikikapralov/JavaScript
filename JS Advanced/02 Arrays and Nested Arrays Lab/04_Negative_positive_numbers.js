function solve(array){
    let result = []
    for (element of array){
        if (element < 0){
            result.unshift(element)
        }
        else{
            result.push(element)
        }
    }
    for (element of result){
        console.log(element)
    }
}

console.log(solve([7, -2, 8, 9]))
console.log(solve([3, -2, 0, -1]))