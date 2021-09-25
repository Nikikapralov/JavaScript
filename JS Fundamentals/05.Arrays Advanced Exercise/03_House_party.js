function keepTrack(array){
    let list = []
    for (let line of array){
        let line_array = line.split(" ")
        let name = line_array[0]
        if (line_array.length == 3){
            if (list.includes(name)){
                console.log(`${name} is already in the list!`)
            }
            else{
                list.push(name)
            }
        }
        else{
            if (list.includes(name)){
                list.pop(name)
            }
            else{
                console.log(`${name} is not in the list!`)
            }
        }

    }
    for (let item of list){
        console.log(item)
    }
}

keepTrack(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)