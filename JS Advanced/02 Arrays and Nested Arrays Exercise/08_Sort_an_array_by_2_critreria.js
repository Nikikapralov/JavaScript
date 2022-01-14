function solve(array){
    function sorting(a, b){
        if (a.length > b.length){
            return 1
        }
        else if (a.length < b.length){
            return - 1
        }
        else{
            return a.localeCompare(b)
        }
    }
    let sorted = array.sort(sorting)
    sorted.forEach(element => {
        console.log(element)
    });
}

solve(['alpha', 
'beta', 
'gamma']
)