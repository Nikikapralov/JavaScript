function check(array_1, array_2){
    for (let element of array_1){
        if (array_2.includes(element)){
            console.log(element)
        }
    }
}
check(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)