function solve(array){
    let header = array.shift()
    let result = []
    let [town, latitude, longitude] = header.slice(2, header.length - 2).split(" | ")
    for (let item of array){
        let [townCurrent, latitudeCurrent, longitudeCurrent] = item.slice(2, item.length - 2).split(" | ")
        result.push({
            [town]: townCurrent,
            [latitude]: Math.round(Number(latitudeCurrent) * 100) / 100,
            [longitude]: Math.round(Number(longitudeCurrent) * 100) / 100
        })
    }
    return JSON.stringify(result)
}

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])
)