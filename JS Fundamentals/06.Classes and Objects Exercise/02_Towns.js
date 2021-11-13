['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'];


function towns(array){
    let object = []
    for (let element of array){
       let items = element.split(" | ")
       let town = items[0]
       let latitude = Number(items[1]).toFixed(2)
       let longitude = Number(items[2]).toFixed(2)
       let currentObject = {"town": town, "latitude": latitude, "longitude": longitude}
       object.push(currentObject)
    }
    for (let obj of object){
        console.log(obj)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)