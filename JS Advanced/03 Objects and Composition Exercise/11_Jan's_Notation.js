function solve(array){
    let numbers = []
    for (let item of array){
        if (typeof(item) === "number"){
            numbers.push(item)
            }
        else{
            if (numbers.length < 2){
                console.log("Error: not enough operands!")
                return
                }
            else{
                let num2 = numbers.pop()
                let num1 = numbers.pop()
                let newNum = eval(`${num1} ${item} ${num2}`)
                numbers.push(newNum)
                }
            }
        }
    if (numbers.length != 1){
        console.log("Error: too many operands!")
        }
    else{
        console.log(numbers[0])
        }
}

solve([3,
    4,
    '+']
   )

solve([5,
    3,
    4,
    '*',
    '-']
   )

solve([7,
    33,
    8,
    '-']
   )
solve([15,
    '/']
   )