function Price(day, age){
    if (age < 0 || age > 122){
        console.log('Error!')
        return
    }
    if (0 <= age && age <= 18){
        if (day == 'Weekday'){
            console.log('12$')
        }
        else if (day == 'Weekend'){
            console.log('15$')
        }
        else if (day == 'Holiday'){
            console.log('5$')
        }
    }
    else if (18 <= age && age <= 64){
        if (day == 'Weekday'){
            console.log('18$')
        }
        else if (day == 'Weekend'){
            console.log('20$')
        }
        else if (day == 'Holiday'){
            console.log('12$')
        }
    }
    else if (64 <= age && age <= 122){
        if (day == 'Weekday'){
            console.log('12$')
        }
        else if (day == 'Weekend'){
            console.log('15$')
        }
        else if (day == 'Holiday'){
            console.log('10$')
        }
    }
}
Price('Weekend', 13)
Price('Weekday', 25)
Price('Holiday', 68)
Price('Weekend', 11111)