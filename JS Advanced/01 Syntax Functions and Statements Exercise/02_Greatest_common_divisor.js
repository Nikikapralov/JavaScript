function solve(num1, num2){
    if (num2 == 0) {
        return num1
    }
    let remainder = num1 % num2
    return solve(num2, remainder)
}
console.log(solve(2154, 458))
console.log(solve(15, 5))