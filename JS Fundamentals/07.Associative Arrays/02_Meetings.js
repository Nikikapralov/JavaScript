function meetings(array){
    let MeetingsMap = new Map()
    for (let item of array){
        let items = item.split(" ")
        let day = items[0]
        let name = items[1]
        if (MeetingsMap.has(day)){
            console.log(`Conflict on ${day}!`)
            continue
        }
        MeetingsMap.set(day, name)
        console.log(`Scheduled for ${day}`)
    }
    for (let [day, name] of MeetingsMap.entries()){
        console.log(`${day} -> ${name}`)
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)