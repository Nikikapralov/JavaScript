function solve(number){
    let stringNumber = String(number)
    let array = []
    for (digit of stringNumber){
        array.push(Number(digit))
    }
    if (array.every((value) => value === array[0])){
        console.log(true)
    }
    else{
        console.log(false)
    }
    console.log(array.reduce((a, b) => a + b))

}

solve(1234)