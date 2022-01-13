function solve(matrix){
    let firstDiagonal = 0
    let secondDiagonal = 0
    let result = []
    for (let i = 0; i < matrix.length; i++){
        firstDiagonal += matrix[i][i]
    }
    for (let i = 0; i < matrix.length; i++){
        secondDiagonal += matrix[i][matrix.length - 1 - i]
    }
    result.push(firstDiagonal)
    result.push(secondDiagonal)
    return result.join(" ")
}
