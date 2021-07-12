function smallest(n1, n2, n3){
    let array = []
    array.push(n1)
    array.push(n2)
    array.push(n3)
    let answer = Math.min(...array)
    return answer
}

console.log(smallest(1, 3, 0))