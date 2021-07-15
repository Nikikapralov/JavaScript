function NePo(array){
    let result_array = []
    for (let el of array){
        if (el < 0){
            result_array.unshift(el)
        }
        else {
            result_array.push(el)
        }
    }
    for (let el of result_array){
        console.log(el)
    }
}

NePo([3, -2, 0, -1])