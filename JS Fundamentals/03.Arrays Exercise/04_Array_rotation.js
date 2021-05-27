function rotate(array, amount){
    for (let i = 0; i < amount; i++){
        array.push(array.shift())
    }
    console.log(array.join(' '))
}
rotate([51, 47, 32, 61, 21], 2)