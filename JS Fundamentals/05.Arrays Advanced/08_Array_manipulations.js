function manipulation(array){
    let array_of_numbers = array.shift().split(' ').map(Number)
    for (let command_index of array){
        let command_number_index = command_index.split(' ')
        let command = command_number_index[0]
        if (command == 'Add'){
            let number = parseInt(command_number_index[1])
            array_of_numbers.push(number)
        }
        else if (command == 'Remove'){
            let number = parseInt(command_number_index[1])
            if (array_of_numbers.includes(number)){
                let index = array_of_numbers.indexOf(number)
                array_of_numbers.splice(index, 1)
            }
        }
        else if (command == 'RemoveAt'){
            let index = parseInt(command_number_index[1])
            array_of_numbers.splice(index, 1)
        }
        else if (command == 'Insert'){
            let number = parseInt(command_number_index[1])
            let index = parseInt(command_number_index[2])
            array_of_numbers.splice(index, 0, number)
        }
    }
    console.log(array_of_numbers.join(' '))
}

manipulation(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)