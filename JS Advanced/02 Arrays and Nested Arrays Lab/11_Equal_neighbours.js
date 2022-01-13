function solve(matrix){
    let result = 0
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[0].length; col++){
            let current = matrix[row][col]
            try {
                if (matrix[row][col + 1] == current){
                    result += 1
                }
                else if (matrix[row + 1][col] == current){
                    result += 1
                }
                
            } catch (error) {
                continue
                
            }
        }
    }
    console.log(result)
}

solve([ [2, 2, 5, 7, 4],
        [4, 5, 5, 3, 4],
        [2, 5, 5, 4, 2]]
)