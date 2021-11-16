function addressBook(array){
    let AddressMap = new Map()
    for (let item of array){
        let items = item.split(":")
        let name = items[0]
        let address = items[1]
        AddressMap.set(name, address)
    }
    let orderedMap = [...AddressMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))
    for (let entry of orderedMap){
        console.log(`${entry[0]} -> ${entry[1]}`)
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)