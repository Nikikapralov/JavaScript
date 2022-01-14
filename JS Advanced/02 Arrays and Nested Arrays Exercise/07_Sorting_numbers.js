function solve(array){
    let result = []
    while (array.length != 0){
        let smallest = Math.min(...array)
        let iMin = array.indexOf(smallest)
        result.push(array.splice(iMin, 1)[0])
        let biggest = Math.max(...array)
        let iBigg = array.indexOf(biggest)
        result.push(array.splice(iBigg, 1)[0])
    }
    let final = []
    result.forEach(element => {
        if (element != undefined){
            final.push(element)
        }
    });
    return final
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 43])