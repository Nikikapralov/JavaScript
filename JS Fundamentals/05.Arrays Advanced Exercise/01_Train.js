function train(array){
    let wagons = array.shift().split(" ")
    for (let i=0; i < wagons.length; i++){
        wagons[i] = parseInt(wagons[i])
    }
    let max_capacity = array.shift()
    while (array.length > 0){
        let command = array.shift()
        command = command.split(" ")
        if (command.length != 1){
            wagons.push(parseInt(command[1]))
        }
        else{
            for (let i=0; i < wagons.length; i++){
                if ((parseInt(command[0]) + wagons[i]) > max_capacity){
                    continue
                }
                else{
                    wagons[i] += parseInt(command[0])
                    break
                }
            }
        }
    }
    console.log(wagons.join(" "))
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])