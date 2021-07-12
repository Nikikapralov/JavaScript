function createMatrix(number){
    let array = []
    for (i = 0; i < number; i++){
        array.push(number)
    }
    for (z = 0; z < number; z++){
        console.log(array.join(' '))
    }
}
createMatrix(4)