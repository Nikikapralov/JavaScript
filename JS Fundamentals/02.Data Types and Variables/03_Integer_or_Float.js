function determine(n1, n2, n3){
    let number = n1 + n2 + n3
    if (Number.isInteger(number)){
        console.log(`${number} - Integer`)
    }
    else{
        console.log(`${number} - Float`)
    }
}
determine(10, 1, 10.9)
