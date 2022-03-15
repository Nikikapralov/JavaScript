function solve(...args){
    let counts = {}
    for (let item of args){
        let type = typeof(item)
        let value = item
        if (Object.keys(counts).includes(type)){
            counts[type] += 1
        }
        else{
            counts[type] = 1
        }
        console.log(`${type}: ${value}`)
    }

    let sorted = Object.keys(counts).sort((a, b) => (counts[b] - counts[a]))
    for (let item of sorted){
        console.log(`${item} = ${counts[item]}`)
    }
}

solve(3.333, 9.999, {}, {}, function func(){})