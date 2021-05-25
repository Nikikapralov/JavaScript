function equal(array_1, array_2){
    let sum = 0
    for (let i = 0; i < array_1.length; i++){
        if (array_1[i] == array_2[i]){
            sum += Number(array_1[i])
            continue
        }
        else{
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            return
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`)
}

equal(['10','20','30'], ['10','20','30'])