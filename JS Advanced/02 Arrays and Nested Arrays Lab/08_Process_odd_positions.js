function solve(array){
    let odd = []
    for (let i = 1; i < array.length; i+=2){
        odd.push(array[i])
    }
    return odd.reverse().map(x => x * 2).join(" ")
}

console.log(solve([10, 15, 20, 25]))