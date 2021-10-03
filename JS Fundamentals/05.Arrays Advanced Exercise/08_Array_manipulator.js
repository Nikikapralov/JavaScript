function arrayManipulator(arrayIntegers, arrayCommands){
    for (let command of arrayCommands){
        command = command.split(" ")
        if (command[0] == "add"){
            let index = command[1]
            let element = command[2]
            arrayIntegers.splice(index, 0, element)
        }
        else if (command[0] == "addMany"){
            let index = Number(command[1])
            command = command.slice(2, command.length)
            for (let number of command){
                arrayIntegers.splice(index, 0, number)
                index++
            }
        }
        else if (command[0] == "contains"){
            let element = command[1]
            if (arrayIntegers.includes(element)){
                console.log(arrayIntegers.indexOf(element))
            }
            else{
                console.log(-1)
            }
            
        }
        else if (command[0] == "remove"){
            let index = command[1]
            arrayIntegers.splice(index, 1)
        }
        else if (command[0] == "shift"){
            let positions = Number(command[1])
                for (let i = 0; i < positions; i++){
                    let current = arrayIntegers.shift()
                    arrayIntegers.push(current)
                }
        }
        else if (command[0] == "sumPairs"){
            let result = []
            while (arrayIntegers.length > 0){
                let first = Number(arrayIntegers.shift())
                let second = Number(arrayIntegers.shift())
                if (isNaN(second)){
                    result.push(first)
                }
                else{
                    result.push(first + second)
                }
            }
            arrayIntegers = result
        }
        else if (command[0] == "print"){
            console.log(arrayIntegers)
            return
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['sumPairs', 'print']
    )