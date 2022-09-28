function schoolGrades(input){
    let hashmap = generateHashmap(input)
    let sorted = Object.entries(hashmap).sort(compareByMean)
    let result = getResult(sorted)
    return result
}

function compareByMean(a, b){
    let aMean = a[1].reduce((a, b) => Number(a) + Number(b)) / a[1].length
    let bMean = b[1].reduce((a, b) => Number(a) + Number(b)) / b[1].length

    if (aMean > bMean){
        return 1
    }

    else if (aMean < bMean){
        return -1
    }

    else {
        return 0
    }
}

function getResult(sortedData){
    let result = ""
    for (let entry of sortedData){
        result += `${entry[0]}: ${entry[1].join(", ")}\n`
    }
    return result
}

function generateHashmap(input){
    let hashmap = {}
    for (let studentData of input){
        let splittedData = studentData.split(" ")
        let name = splittedData[0]
        let grades = splittedData.slice(1)
        if (Object.keys(hashmap).includes(name)){
            hashmap[name] = hashmap[name].concat(grades)
        }
        else {
            hashmap[name] = grades
        }
    }
    return hashmap
}

let input = ['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']

console.log(schoolGrades(input))