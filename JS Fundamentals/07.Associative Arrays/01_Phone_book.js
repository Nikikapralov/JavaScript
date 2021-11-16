function PhoneBook(array){
    let PhoneBookMap = new Map()
    for (let item of array){
        let items = item.split(" ")
        let name = items[0]
        let number = items[1]
        PhoneBookMap.set(name, number)
    }
    for (let [name, number] of PhoneBookMap.entries()){
        console.log(`${name} -> ${number}`)
    }
}

PhoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)