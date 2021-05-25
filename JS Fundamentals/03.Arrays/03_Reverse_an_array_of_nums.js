function reverseArray(number, array){
    let new_array = []
    for (let i = 0; i < number; i++){
        new_array.push(array[i])
    }
    console.log(new_array.reverse().join(' '))
}
reverseArray(2, [1, 2, 3])