function findSpecial(number){
    for (let i = 1; i <= number; i++){
        let sum = 0
        for (let char = 0; char < i.toString().length; char++){
            sum += Number(i.toString()[char])

        }
        if (sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`)
        }
        else{
            console.log(`${i} -> False`)
        }
    }
}
findSpecial(15)