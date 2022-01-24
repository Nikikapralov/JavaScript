function extract(content) {
    let data = document.getElementById(content).textContent
    let result = []
    let string = ""
    for (let item of data){
        if (item == "("){
            string = ""
        }
        else if (item == ")"){
            result.push(string + ";")
        }
        else{
            string += item
        }
    }
    console.log(result.join(" "))
    return result.join(" ")
}