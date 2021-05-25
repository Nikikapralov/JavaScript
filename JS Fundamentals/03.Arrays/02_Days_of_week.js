function dayOfWeek(number){
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let day = days[number - 1]
    if (day != undefined){
        console.log(day)
    }
    else{
        console.log('Invalid day!')
    }
}
dayOfWeek(3)
dayOfWeek(1)
dayOfWeek(7)
dayOfWeek(8)
dayOfWeek(0)
dayOfWeek(300)