function solution(array, argument){
    return array.sort((a, b) => argument == "asc" ? (a - b)  : (b - a))
}

console.log(solution([14, 7, 17, 6, 8], 'asc'))