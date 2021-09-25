function bombs(sequence, bombAndPower){
    let bomb = bombAndPower[0]
    let power = bombAndPower[1]
    while (sequence.includes(bomb)){
        let index = null
        for (let i=0; i < sequence.length; i++){
            if (sequence[i] == bomb){
                index = i
                break
            }
        }
        if (index == null){
            break
        }
        let result = []
        let sequence_1 = sequence.slice(0, index - power)
        let sequence_2 = sequence.slice(index + 1 + power, sequence.length)
        result = result.concat(sequence_1)
        result = result.concat(sequence_2)
        sequence = result
    }
    console.log(sequence.reduce((a, b) => a + b))
}

bombs([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )