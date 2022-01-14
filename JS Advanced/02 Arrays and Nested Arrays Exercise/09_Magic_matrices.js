function solve(matrix){
    let sum = matrix[0].reduce((a, b) => a+b)
    for (let i = 0; i < matrix.length; i++){
        let rowSum = matrix[i].reduce((a, b) => a + b)
        let colSum = 0
        for (let ind = 0; ind < matrix.length; ind++){
            let current = matrix[i][ind]
            colSum += current
        }
        if (rowSum != sum || colSum != sum){
            console.log(false)
            return
        }
    }
    console.log(true)
}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   )