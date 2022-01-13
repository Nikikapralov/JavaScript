function solve(n, k){
    let result = [1]
    let currentElementIndex = 0
    while (result.length != n){
        let startIndex
        if (currentElementIndex - k < 0){
            startIndex = 0
        }
        else{
            startIndex = currentElementIndex - k + 1
        }
        let toSum = result.slice(startIndex, currentElementIndex + 1)
        let newElement = toSum.reduce((a, b) => a + b)
        result.push(newElement)
        currentElementIndex++
    }
    return result
}
solve(8, 2)