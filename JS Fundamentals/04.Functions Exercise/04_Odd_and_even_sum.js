function oddEven(number){
    let number_str = number.toString()
    let odd = []
    let even = []
    for (let char of number_str){
        char = parseInt(char)
        if (char % 2 == 0){
            even.push(char)
        }
        else{
            odd.push(char)
        }
    }
    let odd_result = odd.reduce((a, b) => a + b, 0)
    let even_result = even.reduce((a, b) => a + b, 0)
    let result = `Odd sum = ${odd_result}, Even sum = ${even_result}`
    return result

}

console.log(oddEven(1))