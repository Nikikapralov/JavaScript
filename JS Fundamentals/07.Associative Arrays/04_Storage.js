function storage(array){
    let StorageMap = new Map()
    for (let item of array){
        let items = item.split(" ")
        let name = items[0]
        let quantity = Number(items[1])
        if (StorageMap.has(name)){
           let oldQuantity = StorageMap.get(name)
           let newQuantity = oldQuantity + quantity
           StorageMap.set(name, newQuantity)
        }
        else{
            StorageMap.set(name, quantity)
        }
    }
    for (let entry of StorageMap){
        console.log(`${entry[0]} -> ${entry[1]}`)
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)