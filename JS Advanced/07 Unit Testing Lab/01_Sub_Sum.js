function sumFunc(array, start, end){
    if (!Array.isArray(array)){
        return NaN
    }

    if (start < 0){
        start = 0
    }

    if (end > array.length - 1){
        end = array.length - 1
    }

    castedArray = array.map((a) => Number(a))
    toSum = castedArray.slice(start, end + 1)
    return toSum.reduce((a, b) => a + b, 0)

}

console.log(sumFunc([10, 20, 30, 40, 50, 60], 3, 300))
console.log(sumFunc([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(sumFunc([10, 'twenty', 30, 40], 0, 2))
console.log(sumFunc([], 1, 2))
console.log(sumFunc('text', 0, 2))