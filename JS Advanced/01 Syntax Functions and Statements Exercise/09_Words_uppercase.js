function solve(string){
    let result = string.match(/\w+/gim)
    for (let i = 0; i < result.length; i++){
        result[i] = result[i].toUpperCase()
    }
    console.log(result.join(", "))
}

solve('Hi, how are you?')