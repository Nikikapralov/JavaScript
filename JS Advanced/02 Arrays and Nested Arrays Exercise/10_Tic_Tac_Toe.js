function solve(array){
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]]
    let counter = 0
    let player = "X"
    
    for (let i = 0; i < array.length; i++){
        let [row, col] = array[i].split(" ")
        row = Number(row)
        col = Number(col)

        if (dashboard[row][col] != false){
            console.log("This place is already taken. Please choose another!")
            continue
        }
         
        if (player == "X"){
            dashboard[row][col] = "X"
            counter += 1
            player = "O"
            if (checkWin(dashboard)){
                console.log("Player X wins!")
                break
            }
        }

        else{
            dashboard[row][col] = "O"
            counter += 1
            player = "X"
            if (checkWin(dashboard)){
                console.log("Player O wins!")
                break
            }
        }

        if (counter == 9){
            console.log("The game ended! Nobody wins :(")
            break
        }
    }
    for (item of dashboard){
        console.log(item.join("\t"))
    }

    function checkWin(dashboard){
        for (let i = 0; i < dashboard.length; i++){
            if (dashboard[i][0] == dashboard[i][1] && dashboard[i][1] == dashboard[i][2] && dashboard[i][0] != false){
                return true
            }
            if (dashboard[0][i] == dashboard[1][i] && dashboard[1][i] == dashboard[2][i] && dashboard[0][i] != false){
                return true
            }
            if (dashboard[0][0] == dashboard[1][1] && dashboard[1][1] == dashboard[2][2] && dashboard[0][0] != false){
                return true
            }
            if (dashboard[0][2] == dashboard[1][1] && dashboard[1][1] == dashboard[2][0] && dashboard[0][2] != false){
                return true
            }
        }
    } 
}

solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)