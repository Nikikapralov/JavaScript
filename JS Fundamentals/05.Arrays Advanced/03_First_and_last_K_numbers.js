function fKlK(array){
    let k = array.shift()
    let first_k = array.slice(0, k).join(' ')
    let last_k = array.slice(-k).join(' ')
    console.log(first_k)
    console.log(last_k)

}

fKlK([2, 
    7, 8, 9]
    )