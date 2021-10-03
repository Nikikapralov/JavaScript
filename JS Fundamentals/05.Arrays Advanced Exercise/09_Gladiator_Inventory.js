function gladiatorInventory(Array){
    let inventory = Array.shift().split(" ")
    for (let command of Array){
        command = command.split(" ")
        let order = command[0]
        if (order == "Buy"){
            let item = command[1]
            if (!inventory.includes(item)){
                inventory.push(item)
            }

        }
        else if (order == "Trash"){
            let item = command[1]
            if (inventory.includes(item)){
                inventory.splice(inventory.indexOf(item), 1)
            }
        }
        else if (order == "Repair"){
            let item = command[1]
            if (inventory.includes(item)){
                inventory.splice(inventory.indexOf(item), 1)
                inventory.push(item)
            }
        }
        else if (order == "Upgrade"){
            let item = command[1].split('-')
            let equipment = item[0]
            let upgrade = item[1]
            if (inventory.includes(equipment)){
                index = inventory.indexOf(equipment)
                inventory.splice(index + 1, 0, equipment + ":" + upgrade)
            }
        }
    }
    console.log(inventory.join(" "))
}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)