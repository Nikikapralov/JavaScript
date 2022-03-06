function solution(number){
    return function(toAdd){
        toReturn = number + toAdd
        return toReturn
    }
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
