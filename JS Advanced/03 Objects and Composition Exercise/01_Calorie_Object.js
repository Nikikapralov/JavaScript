function solve(array){
    let result = {}
    for (let i = 0; i < array.length - 1; i+=2) {
        const element = array[i];
        const attribute = Number(array[i + 1])
        result[element] = attribute
    }
    console.log(result)
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))