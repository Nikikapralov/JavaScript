function extractOddOccurences(input){
    let inputArray = input.split(" ")
    let normalisedArray = inputArray.map((a) => a.toLowerCase())
    let wordCountMap = getWordCountMap(normalisedArray)
    let oddOccurences = getOddOccurences(wordCountMap)
    let formattedResult = formatResult(oddOccurences)
    return formattedResult
}

let input = 'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'

function getWordCountMap(wordArray){
    let result = {}
    for (let word of wordArray){
        if (Object.keys(result).includes(word)){
            result[word] += 1
        }
        else{
            result[word] = 1
        }
    }
    return result
}

function getOddOccurences(wordCountMap){
    let resultArray = []
    for (let word in wordCountMap){
        if (wordCountMap[word] % 2 == 1){
            resultArray.push(word)
        }
    }
    return resultArray
}

function formatResult(data){
    return data.join(" ")
}

console.log(extractOddOccurences(input))