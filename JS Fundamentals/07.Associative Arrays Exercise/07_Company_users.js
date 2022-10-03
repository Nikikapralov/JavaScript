function getCompanyUsers(input){
    let companyUsersMap = {}
    for (let entry of input){
        let [company, user] = entry.split(" -> ")
        if (!Object.keys(companyUsersMap).includes(company)){
            companyUsersMap[company] = new Set()
        }
        companyUsersMap[company].add(user)
    }
    let ordered = Object.entries(companyUsersMap).sort((a, b) => a[0].localeCompare(b))
    let result = formatResult(ordered)
    return result
}

let input = [
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]

let input_2 = [
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
function formatResult(data){
    let result = ``
    for (let [company, employees] of data){
        result += `${company}\n`
        for (let employee of employees){
            result += `-- ${employee}\n`
        }
    }
    return result
}
console.log(getCompanyUsers(input))
console.log(getCompanyUsers(input_2))