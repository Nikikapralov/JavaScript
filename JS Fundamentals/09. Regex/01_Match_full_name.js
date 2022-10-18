function matchName(names, regex){
    let result = []
    names = names.split(", ")
    for (let name of names){
        let currentResult = name.match(regex)
        if (currentResult){
            result.push(name)
        }
    }
    return result.join(" ")
}

let input = "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"
let regex = /\b[A-Z][a-z]+\s[A-Z][a-z]+\b/


console.log(matchName(input, regex))