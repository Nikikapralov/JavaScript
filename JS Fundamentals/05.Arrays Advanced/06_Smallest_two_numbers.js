function smallestTwo(array){
    let sorted_array = array.sort((a, b) => a - b)
    return sorted_array.slice(0, 2).join(' ')
}

console.log(smallestTwo([30, 15, 50, 5]))