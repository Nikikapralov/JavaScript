function amazing(n){
    let number = n.toString()
    number = number.split('')
    for (let i = 0; i < number.length; i++){
        number[i] = Number(number[i])
    }
    let result = number.reduce((a, b) => a + b)
    result = result.toString()
    if (result.includes('9')){
        console.log(`${n} Amazing? True`)
    }
    else{
        console.log(`${n} Amazing? False`)
    }
}
amazing(1233)