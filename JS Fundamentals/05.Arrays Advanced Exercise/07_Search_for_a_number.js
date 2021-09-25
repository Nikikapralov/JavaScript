function search(array, arrayNumbers){
    array = array.slice(0, arrayNumbers[0])
    array = array.slice(arrayNumbers[1], array.length)
    let item = arrayNumbers[2]
    let count = 0
    for (let number of array){
        if (number == item){
            count++
        }
    }
    console.log(`Number ${item} occurs ${count} times.`)
}


search([2, 3, 4, 3, 3, 4, 1, 6, 7, 7, 7, 3],
    [5, 2, 3])