function check(array){
    for (let i = 0; i < array.length; i++){
        let left = array.slice(0, i)
        let leftSum = undefined
        let right = array.slice(i + 1, array.length)
        let rightSum = undefined
        if (left.length == 0){
            leftSum = 0
        }
        else{
            leftSum = left.reduce((a, b) => a + b)
        }
        if (right.length == 0){
            rightSum = 0
        }
        else{
            rightSum = right.reduce((a, b) => a + b)
        }
        if (leftSum == rightSum){
            console.log(i)
            return
        }
    }
    console.log('no')
}
check([10])