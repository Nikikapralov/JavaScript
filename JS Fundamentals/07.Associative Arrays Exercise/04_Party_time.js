function startParty(input){
    let partyIndex = input.findIndex((a) => a == "PARTY")
    let arrivals = input.slice(partyIndex + 1)
    let guests = input.slice(0, partyIndex)
    let [VIP, non_VIP] = sortGuests(guests)
    let guestsArrived = getGuestsPresent(arrivals, VIP, non_VIP)
    let VIPMissing = new Set(
    [...VIP].filter(x => !guestsArrived["VIP"].has(x)));
    let non_VIPMissing = new Set(
        [...non_VIP].filter((a) => !guestsArrived["non_VIP"].has(a))
    )
    let totalGuestsNotArrived = VIPMissing.size + non_VIPMissing.size
    let result = formatResult(totalGuestsNotArrived, VIPMissing, non_VIPMissing)
    return result

}

let input = ['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]

let input_2 = ['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

function sortGuests(guests){
    let VIP = new Set()
    let non_VIP = new Set()
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((a) => a.toString())
    for (let guest of guests){
        if (numbers.includes(guest[0])){
            VIP.add(guest)
            continue
        }
        non_VIP.add(guest)
    }
    return [VIP, non_VIP]
}

function getGuestsPresent(arrivals, VIP, non_VIP){
    let guestsArrived = {"VIP": new Set(), "non_VIP": new Set()}
    for (let guest of arrivals){
        if (VIP.has(guest)){
            guestsArrived["VIP"].add(guest)
        }
        else if (non_VIP.has(guest)){
            guestsArrived["non_VIP"].add(guest)
        }
    }
    return guestsArrived
}

function formatResult(totalGuests, VIPMissing, non_VIPMissing){
    let result = `${totalGuests}\n`
    for (let vip of VIPMissing){
        result += `${vip}\n`
    }
    for (let non_vip of non_VIPMissing){
        result += `${non_vip}\n`
    }
    return result
}

console.log(startParty(input))
console.log(startParty(input_2))