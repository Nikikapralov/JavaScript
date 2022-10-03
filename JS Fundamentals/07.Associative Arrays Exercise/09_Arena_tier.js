function fight(input){
    let gladiators = {}
    for (let entry of input){
        if (entry == "Ave Cesar"){
            return end(gladiators)
        }
        else if (entry.includes("vs")){
            gladiatorBattle(gladiators, entry)
        }
        else{
            gladiators = assignGladiators(entry, gladiators)
        }
    }
}


let input = [
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]
    

let input_2 = [
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    
function calculateTotalPower(abilities){
    let totalPower = 0
    for (let entry of abilities){
        let power = Object.values(entry)[0]
        totalPower += Number(power)
    }
    return totalPower
}

function gladiatorBattle(gladiators, entry){
    let [gladiator_1, gladiator_2] = entry.split(" vs ")
    if (Object.keys(gladiators).includes(gladiator_1) && Object.keys(gladiators).includes(gladiator_2)){
        let gladiator_1_skills = new Set(Object.keys(gladiators[gladiator_1]))
        let gladiator_2_skills = new Set(Object.keys(gladiators[gladiator_2]))
        let union = new Set([...gladiator_1_skills, ...gladiator_2_skills])
        if (union.size > 0){
            let gladiator_1_power = calculateTotalPower(Object.entries(gladiators[gladiator_1]))
            let gladiator_2_power = calculateTotalPower(Object.entries(gladiators[gladiator_2]))
            if (gladiator_1_power > gladiator_2_power){
                delete gladiators[gladiator_2]
            }
            else if (gladiator_1_power < gladiator_2_power){
                delete gladiators[gladiator_1]
            }
        }
    }
}

function end(gladiators){
    let ordered = Object.entries(gladiators).map((a) =>
    [a[0], Object.entries(a[1]), calculateTotalPower(Object.values(a[1]["skills"]))]).sort((a, b) =>
    b[2] - a[2])
    let result = formatResult(ordered)
    return result
}

function formatResult(data){
    let result = ``
    for (let [gladiator, abilites, totalPower] of data){
        result += `${gladiator}: ${totalPower} skill\n`
        for (let [ability, power] of Object.entries(abilites[0][1][0])){
            result += `- ${ability} <!> ${power}\n`
        }
    }

    return result
}

function assignGladiators(entry, gladiators){
    let [gladiator, skill, skillPower] = entry.split(" -> ")
            if (!Object.keys(gladiators).includes(gladiator)){
                gladiators[gladiator] = {"skills": [{[skill]: skillPower}]}
            }
            else{
                if (gladiators[gladiator]["skills"][Object.keys(gladiators[gladiator]["skills"][0])[0]] < skillPower){
                    gladiators[gladiator]["skills"].push({[skill]: skillPower})
                }
            }
    console.log(gladiators)
    return gladiators
}
console.log(fight(input))
console.log(fight(input_2))