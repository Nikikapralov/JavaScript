function compute(array){
    let originalSum = array.reduce((a, b) => a + b)
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            array[i] = array[i] + i
        }
        else{
            array[i] = array[i] - i
        }
    }
    let newSum = array.reduce((a, b) => a + b)
    console.log(array)
    console.log(originalSum)
    console.log(newSum)
}
compute([-5, 11, 3, 0, 2])