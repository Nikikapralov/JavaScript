function trackWords(input){
    let searchWords = getSearchWords(input)
    let sentenceArray = input.slice(1)
    let result = getWordsOccurences(sentenceArray, searchWords)
    let ordered = Object.entries(result).sort((a, b) => b[1] - a[1])
    let formattedResult = formatResult(ordered)
    return formattedResult

}

let input = [
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
    

function getSearchWords(input){
    let searchWords = input[0].split(" ")
    return searchWords
}

function getWordsOccurences(sentenceArray, searchWords){
    let result = {}
    searchWords.map((a) => result[a] = 0)
    for (let word of sentenceArray){
        if (Object.keys(result).includes(word)){
            result[word] += 1
        }
    }
    return result
}

function formatResult(orderedData){
    let result = ''
    for (let entry of orderedData){
        result += `${entry[0]} - ${entry[1]}\n`
    }
    return result
}

console.log(trackWords(input))