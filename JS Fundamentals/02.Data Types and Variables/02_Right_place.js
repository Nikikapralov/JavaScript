function fill(toFill, letter, toCompare){
    toFill = toFill.split('')
    let index_replace = toFill.indexOf('_')
    toFill[index_replace] = letter
    let result = toFill.join('')
    if (result == toCompare){
        console.log('Matched')
    }
    else{
        console.log('Not Matched')
    }
}

fill('Str_ng', 'I', 'Strong')
fill('Str_ng', 'i', 'String')