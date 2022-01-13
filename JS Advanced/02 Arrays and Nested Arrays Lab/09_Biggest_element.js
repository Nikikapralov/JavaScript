function solve(matrix){
    let biggest = []
    for (item of matrix){
        biggest.push(Math.max(...item))
    }
    return Math.max(...biggest)
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]))