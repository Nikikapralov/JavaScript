function solve(array, n){
    let result = []
    for (let index = 0; index < array.length; index+=n) {
        const element = array[index];
        result.push(element)
    }
    return result
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)