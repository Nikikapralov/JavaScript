function sum(array){
    let first = parseInt(array.shift())
    array.unshift(first)
    let last = parseInt(array.pop())
    let result = first + last
    return result
}

console.log(sum(['-40']))