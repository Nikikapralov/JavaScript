function getFibonator(){
    let previous = 1
    let current = 0

    function fib(){
        let result = previous + current
        previous = current
        current = result
        return result
    }
    return fib
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
