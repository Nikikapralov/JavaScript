function matchDates(input, regex){
    let matches = input.matchAll(regex)
    result = formatResult(Array.from(matches))
    return result
}

let input = "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"
let regex = /\b(?<day>\d{2})(?<separator>[\.\-/])(?<month>[A-Z][a-z]{2})(\k<separator>)(?<year>\d{4})\b/g
console.log(matchDates(input, regex))

function formatResult(matchedIterator){
    let result = ''
    for (let entry of matchedIterator){
        let day = entry.groups.day
        let month = entry.groups.month
        let year = entry.groups.year
        result += `Day: ${day}, Month: ${month}, Year: ${year}\n`
    }
    return result
}