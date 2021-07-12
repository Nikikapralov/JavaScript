function isPalindrome(array){
    let output = []
    for (let number of array){
        number = number.toString()
        let number_reversed = number.split('').reverse().join('')
        if (number == number_reversed){
            output.push('true')
        }
        else{
            output.push('false')
        }
    }
    for (let op of output){
        console.log(op)
    }
}

isPalindrome([123,323,421,121])