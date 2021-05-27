function lady(array){
    let size = array[0]
    let indexes = array[1].split(' ')
    let field = []
    function flyRight(field, ladyIndex, amount){
        if (field[ladyIndex + amount] == undefined){
            return field
        }
        else if (field[ladyIndex + amount] == 1){
            ladyIndex = ladyIndex + amount
            return flyRight(field, ladyIndex, amount)
            }
        else{
            field[ladyIndex + amount] = 1
            return field
        }
    }
    function flyLeft(field, ladyIndex, amount){
        if (field[ladyIndex - amount] == undefined){
            return field
        }
        else if (field[ladyIndex - amount] == 1){
            ladyIndex = ladyIndex - amount
            return flyLeft(field, ladyIndex, amount)
            }
        else{
            field[ladyIndex - amount] = 1
            return field
        }
    }
    for (let s = 0; s < size; s++){
        field.push(0)
    }
    for (let index of indexes){
        if ((Number(index) < field.length) && (Number(index) >= 0)){
            field[Number(index)] = 1
        }
    }
    for (let i = 2; i < array.length; i++){
        let box = array[i].split(' ')
        let ladyIndex = Number(box[0])
        let direction = box[1]
        let amount = Number(box[2])
        if (field[ladyIndex] != 1){
            continue
        }
        if (direction == 'right'){
            field[ladyIndex] = 0
           field = flyRight(field, ladyIndex, amount)
            }
        else if (direction == 'left'){
            field[ladyIndex] = 0
            field = flyLeft(field, ladyIndex, amount)
        }
    }
    console.log(field.join(' '))
}
lady([1, '0 1 2 3 4',
'0 left 1',
'4 left 1' ]
)