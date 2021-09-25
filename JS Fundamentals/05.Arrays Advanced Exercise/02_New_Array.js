function distinct(array){
    let met_before_array = []
    for (let item of array){
        if (met_before_array.includes(item)){
            continue
        }
        else{
            met_before_array.push(item)
        }
    }
    console.log(met_before_array.join(" "))
}

distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])