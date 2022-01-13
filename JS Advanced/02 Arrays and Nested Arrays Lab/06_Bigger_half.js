function solve(array){
    let result = array.sort((a, b) => a - b)
    let startIndex = Math.floor(result.length / 2)
    return result.slice(startIndex, result.length)
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]))
console.log(solve([4, 7, 2, 5]))