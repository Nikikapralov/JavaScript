function magic(array, number){
    let result = []
    for (let i = 0; i < array.length; i++){
        for (let n = i + 1; n < array.length; n++){
            if (array[i] + array[n] == number){
                result.push(array[i])
                result.push(array[n])
                console.log(result.join(' '))
                result = []
            }
        }
    }
}
magic([1, 7, 6, 2, 19, 23],
    8
    )