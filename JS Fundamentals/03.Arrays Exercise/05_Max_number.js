function top(array){
    let topNumbers = []
    for (let i = 0; i < array.length; i++){
        let current = array[i]
        let flag = false
        for (let n = i + 1; n < array.length; n++){
            if (array[n] >= current){
                flag = true
                break
            }
        }
    if (flag == false){
        topNumbers.push(current)
        }
    }
    console.log(topNumbers.join(' '))
}
top([41,
    41,
    34,
    20])