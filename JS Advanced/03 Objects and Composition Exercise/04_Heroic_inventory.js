function solve(array){
    let result = []
    for (let entry of array){
        let [name, level, items] = entry.split(' / ')
        if (items != undefined){
            items = items.split(", ")
        }
        else{
            items = []
        }
        level = Number(level)
        let current = {
            name, level, items
        }
        result.push(current)
    }
    return JSON.stringify(result)
}