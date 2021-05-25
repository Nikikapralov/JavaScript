function sumOddsubtrEven(array){
    let sumOdd = array.filter((a) => a % 2 == 1)
    if (sumOdd.length >= 1){
    sumOdd = sumOdd.reduce((a, b) => Number(a) + Number(b))}
    else{
        sumOdd = 0
    }
    let sumEven = array.filter((a) => a % 2 == 0)
    if (sumEven.length >= 1){
        sumEven = sumEven.reduce((a, b) => Number(a) + Number(b))
    }
    else{
        sumEven = 0
    }
    let result = sumEven - sumOdd
    console.log(result)
}
sumOddsubtrEven([0, 0])