function compute(string_1, string_2, string_3){
    let sum_length = string_1.length + string_2.length + string_3.length
    let average = Math.floor(sum_length / 3)
    console.log(sum_length)
    console.log(average)
}

compute('chocolate', 'ice cream', 'cake')