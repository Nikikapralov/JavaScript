function Round(number, precision){
    if (precision > 15){
        precision = 15
    }
    number = parseFloat(number)
    number = number.toFixed(precision)
    let array = String(number).split('.')
    let decimal_part = array[1]
    let first_part = array[0]
    let decimal_without_zeroes = ''
    for (let i = 0; i < decimal_part.length; i++){
        if (decimal_part[i] == 0){
            break
        }
        else{
            decimal_without_zeroes += decimal_part[i]
        }
    }
    let final = parseFloat(first_part + '.' + decimal_without_zeroes)
    console.log(final)
}
Round(10.0, 5)