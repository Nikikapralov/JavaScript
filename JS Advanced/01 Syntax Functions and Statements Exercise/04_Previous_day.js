function solve(year, month, day){
    let day_new = new Date(year, month - 1, day - 1).getDate()
    let month_new = new Date(year, month - 1, day - 1).getMonth()
    let year_new = new Date(year, month - 1, day - 1).getFullYear()
    console.log(`${year_new}-${month_new + 1}-${day_new}`)

}

solve(2016, 12, 1)