function solve(array){
    let myObject = {}
    for (item of array){
        let [town, population] = item.split(" <-> ")
        if (myObject[town] != undefined){
            myObject[town] += Number(population)
        }
        else{
            myObject[town] = Number(population)
        }
    }
    for (item in myObject){
        console.log(`${item} : ${myObject[item]}`)
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)