function findWordOccurences(input){
    let hashmap = generateWordsMap(input)
    let orderedResult = Object.entries(hashmap).sort((a, b) => b[1] - a[1])
    let result = formatResult(orderedResult)
    return result

}

let input = ["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence",
"And", "finally", "the", "third", "sentence"]

function generateWordsMap(input){
    let hashmap = {}
    for (let word of input){
        hashmap[word] = !Object.keys(hashmap).includes(word) ? 1 : (hashmap[word] + 1)
    }
    return hashmap
}

function formatResult(hashmap){
    let result = ""
    for (let entry of hashmap){
        result += `${entry[0]} -> ${entry[1]} times\n`
    }
    return result
}

console.log(findWordOccurences(input))