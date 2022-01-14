function solve(array){
    let matrix = []
    let diagonals = []
    let mainDiagonal = 0
    let secondaryDiagonal = 0
    let isIncluded = false
    for (string of array){
        let numbers = string.split(" ").map((x) => Number(x))
        matrix.push(numbers)
    }
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i]
        secondaryDiagonal += matrix[i][matrix.length - i - 1]
        diagonals.push([i, i])
        diagonals.push([i, matrix.length - i - 1])
    }
    if (mainDiagonal == secondaryDiagonal){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                for (let diagonal of diagonals){
                    isIncluded = false
                    let [rowd, cold] = diagonal
                    if (rowd == row && cold == col){
                        isIncluded = true
                        break
                    }
                }
                if (!isIncluded){
                    matrix[row][col] = mainDiagonal
                }
            }
            
        }
    }
    matrix.forEach(element => {
        console.log(element.join(" "))
    });
}

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)

solve(['1 1 1',
'1 1 1',
'1 1 0']

)