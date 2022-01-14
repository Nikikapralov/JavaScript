function solve(rows, cols){
    let row = 0
    let col = 0
    let direction = "right"
    let current = 1
    let matrix = Array(rows).fill().map(() => Array(cols).fill("slot"))
    matrix[0][0] = 1
    while (current < rows * cols){
        if (direction == "right"){
            if ((0 <= row && row < rows) && (0 <= col + 1 && col + 1 < cols)){
                if (matrix[row][col + 1] == "slot"){
                    current++
                    matrix[row][col + 1] = current
                    col++
                }
                else{
                    direction = "down"
                    continue
                }
            }
            else{
                direction = "down"
                continue
            }
        }
        if (direction == "down"){
            if ((0 <= row + 1 && row + 1 < rows) && (0 <= col && col < cols)){
                if (matrix[row + 1][col] == "slot"){
                    current++
                    matrix[row + 1][col] = current
                    row++
                }
                else{
                    direction = "left"
                    continue
                }
            }
            else{
                direction = "left"
                continue
            }
        } 
        if (direction == "left"){
            if ((0 <= row && row < rows) && (0 <= col - 1 && col - 1 < cols)){
                if (matrix[row][col - 1] == "slot"){
                    current++
                    matrix[row][col - 1] = current
                    col--
                }
                else{
                    direction = "up"
                    continue
                }
            }
            else{
                direction = "up"
                continue
            }
        } 
        if (direction == "up"){
            if ((0 <= row - 1 && row - 1 < rows) && (0 <= col && col < cols)){
                if (matrix[row - 1][col] == "slot"){
                    current++
                    matrix[row - 1][col] = current
                    row--
                }
                else{
                    direction = "right"
                    continue
                }
            }
            else{
                direction = "right"
                continue
            }
        } 
    }
    matrix.forEach(element => {
        console.log(element.join(" "))
        
    });
}
solve(5, 5)