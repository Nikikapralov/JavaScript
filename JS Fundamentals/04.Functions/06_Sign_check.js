function check(n1, n2, n3){
    let negative = []
    if (n1 < 0){
        negative.push(n1)
    }
    if (n2 < 0){
        negative.push(n2)
    }
    if (n3 < 0){
        negative.push(n3)
    }

    if (negative.length % 2 == 0){
        console.log('Positive')
    }
    else{
        console.log('Negative')
    }
}
check(-1, 2, 0)