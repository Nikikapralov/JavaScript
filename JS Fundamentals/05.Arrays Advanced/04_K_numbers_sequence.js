function sum(n, k){
    let start = 0
    let array = [1]
    while (array.length < n){
        let new_element = array.slice(start).reduce((a, b) => a + b)
        array.push(new_element)
        if (array.length > k){
            start++
        }
    }
    return array.join(' ')
}

console.log(sum(8, 2))