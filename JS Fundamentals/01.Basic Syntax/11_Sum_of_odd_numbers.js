function Sum(amount){
    let sum = 0
    for (let i = 0; i <= amount * 2; i++){
        if (i % 2 == 1){
            console.log(i)
            sum += i
        }
    }
    console.log(`Sum: ${sum}`)
}
Sum(6)