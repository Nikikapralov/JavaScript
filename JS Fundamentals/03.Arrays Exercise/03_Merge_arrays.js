function merge(array_1, array_2){
    let array_3 = []
    for (let i = 0; i < array_1.length; i++){
        if (i % 2 == 0){
            array_3.push(Number(array_1[i]) + Number(array_2[i]))
        }
        else{
            array_3.push(array_1[i] + array_2[i])
        }
    }
    console.log(array_3.join(' - '))
}
merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)