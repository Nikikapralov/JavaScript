function solve(array, n=0){
    let result = []
    array.forEach(element => {
        n++
        if (element === "add"){
            result.push(n)
        }
        else if (element === "remove"){
            result.pop()
        }
    });
    if (result.length){
        result.forEach(element => {
            console.log(element)
        });
    }
    else{
        console.log("Empty")
    }
}

solve(['add', 
'add', 
'add', 
'add']
)

solve(['add', 
'add', 
'remove', 
'add', 
'add']
)

solve(['remove', 
'remove', 
'remove']
)