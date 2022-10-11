function checkExists(substring, string){
    if (string.toLowerCase().includes(substring.toLowerCase())){
        return substring
    }
    return `${substring} not found!`
}

let input = ['javascript',
'JavaScript is the best programming language']
let input_2 = ['python',
'JavaScript is the best programming language']

console.log(checkExists(...input))
console.log(checkExists(...input_2))