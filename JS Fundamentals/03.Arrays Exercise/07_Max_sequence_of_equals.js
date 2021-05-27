function max(array){
    let finalLongest = []
    let longest = []
    let previous = array[0]
    longest.push(previous)
    for (let i = 1; i < array.length; i++){
        let current = array[i]
        if (previous == current){
            longest.push(current)
        }
        else{
            if (longest.length > finalLongest.length){
                finalLongest = []
                for (let element of longest){
                    finalLongest.push(element)
                }
            }
            longest = []
            longest.push(current)
        }
        previous = current
    }
    console.log(finalLongest.join(' '))
}
max([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])