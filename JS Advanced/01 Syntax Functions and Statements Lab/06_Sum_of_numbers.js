function sum(n1, n2){
    n1 = Number(n1)
    n2 = Number(n2)
    let result = 1
    for (let i = n1; i <= n2; i++){
        result += i
    }
    return result
}
console.log(sum("1", "5"))