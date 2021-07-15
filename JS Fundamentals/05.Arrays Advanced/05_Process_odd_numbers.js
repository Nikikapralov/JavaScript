function process_numbers(array){
    let odd_numbers = array.filter((el, i) => i % 2 === 1)
    return odd_numbers.map((a) => a * 2).reverse().join(' ')
}

console.log(process_numbers([10, 15, 20, 25]))