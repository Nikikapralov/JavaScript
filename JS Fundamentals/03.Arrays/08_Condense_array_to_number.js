function condense(array){
    while (array.length > 1){
        for (let i = 0; i < array.length - 1; i++)
            array[i] = array[i] + array[i + 1]
        array.pop()
    }
    console.log(array[0])
}
condense([1])