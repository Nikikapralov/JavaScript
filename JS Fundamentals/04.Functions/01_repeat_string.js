function repeat(string, number){
    result = ''
    for (let i = 0; i < number; i++){
        result += string
    }
    return result
}
console.log(repeat('a', 3))