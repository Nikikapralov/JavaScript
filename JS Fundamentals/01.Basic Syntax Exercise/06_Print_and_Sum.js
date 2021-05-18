function Loop(start, end){
    let sum = 0
    let array = []
    for (start; start <= end; start++){
        array.push(start)
        sum += start
    }
    console.log(array.join(' '))
    console.log(`Sum: ${sum}`)
}
Loop(5, 10)
Loop(0, 26)
Loop(50, 60)