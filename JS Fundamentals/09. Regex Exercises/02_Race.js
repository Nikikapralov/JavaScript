function race(input){
    let participants = {}
    input.shift().split(", ").map((name) => participants[name] = {"distance": 0})
    for (let command of input){
        if (command == "end of race"){
            return formatResult(participants)
        }
        let clearedName = command.split(/\W/).join("")
        let name = clearedName.split(/\d/).join("")
        let distance = clearedName.match(/\d/g).reduce((a, b) => Number(a) + Number(b))
        if (Object.keys(participants).includes(name)){
            participants[name]["distance"] += distance
        }
    }
}

let input = ["George, Peter, Bill, Tom",
"G4e@55or%6g6!68e!!@",
"R1@!3a$y4456@",
"B5@i@#123ll",
"G@e54o$r6ge#",
"7P%et^#e5346r",
"T$o553m&6",
"end of race"]

let regex = /b/

function formatResult(participants){
    let orderedParticipants = Object.entries(participants).sort((a, b) => b[1]["distance"] - a[1]["distance"])
    let result = `1st place: ${orderedParticipants[0][0]}\n2nd place: ${orderedParticipants[1][0]}\n3rd place: ${orderedParticipants[2][0]}`
    return result
}

console.log(race(input))