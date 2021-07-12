function charsInRange(char1, char2){
    let char1_int = char1.charCodeAt(0)
    let char2_int = char2.charCodeAt(0)
    let array = [char1_int, char2_int]
    let smallest = Math.min(...array)
    let biggest = Math.max(...array)
    let result = []
    for (let i=smallest + 1; i < biggest; i++){
        result.push(String.fromCharCode(i))
    }
    return result.join(' ')
}

console.log(charsInRange('C',
'#'
))