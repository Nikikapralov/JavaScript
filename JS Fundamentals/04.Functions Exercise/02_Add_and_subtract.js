function sum(n1, n2, n3){
    let result = n1 + n2
    function subtract(result, n3){
        let final = result - n3
        return final
    }
    return subtract(result, n3)
}

console.log(sum(1, 6, 3))