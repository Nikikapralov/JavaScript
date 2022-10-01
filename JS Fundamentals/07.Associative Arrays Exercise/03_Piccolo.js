function piccolo(input){
    let garage = []
    for (let entry of input){
        [direction, car] = entry.split(", ")
        if (direction == "IN"){
            garage.push(car)
        }
        else if (direction == "OUT"){
            garage.pop(car)
        }
    }
    if (garage.length == 0){
        return "Parking Lot is Empty"
    }
    else{
        let result = ``
        let sorted = garage.sort((a, b) => a.localeCompare(b))
        sorted.map((a) => result += `${a}\n`)
        return result
    }
}

let input = ['IN, CA2844AA',
            'IN, CA1234TA',
            'OUT, CA2844AA',
            'IN, CA9999TT',
            'IN, CA2866HI',
            'OUT, CA1234TA',
            'IN, CA2844AA',
            'OUT, CA2866HI',
            'IN, CA9876HH',
            'IN, CA2822UU']

let input_2 = ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']


console.log(piccolo(input))
console.log(piccolo(input_2))
