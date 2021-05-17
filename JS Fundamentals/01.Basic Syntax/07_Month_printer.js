function MonthPrinter(number){
    if (number >= 1 && number <= 12){
        if (number == 1){
            console.log('January')
        }
        else if (number == 2){
            console.log('February')
        }
        else if (number == 3){
            console.log('March')
        }
        else if (number == 4){
            console.log('April')
        }
        else if (number == 5){
            console.log('May')
        }
        else if (number == 6){
            console.log('June')
        }
        else if (number == 7){
            console.log('July')
        }
        else if (number == 8){
            console.log('August')
        }
        else if (number == 9){
            console.log('September')
        }
        else if (number == 10){
            console.log('October')
        }
        else if (number == 11){
            console.log('November')
        }
        else if (number == 12){
            console.log('December')
        }
    }
    else{
        console.log('Error!')
    }
}

MonthPrinter(1)
MonthPrinter(2)
MonthPrinter(3)
MonthPrinter(4)
MonthPrinter(5)
MonthPrinter(6)
MonthPrinter(7)
MonthPrinter(8)
MonthPrinter(9)
MonthPrinter(10)
MonthPrinter(11)
MonthPrinter(12)
MonthPrinter(-10)
MonthPrinter(100)
