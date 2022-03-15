function add(number){
    let sum = 0

    function addNumber(number){
        sum += number
        return addNumber
    }

    addNumber.toString = function toString(){
        return sum
    }

    return addNumber(number)

}

console.log(add(2)(6)(-3).toString())