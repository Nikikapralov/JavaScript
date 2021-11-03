function buildWall(workersAndDays){
    let concrete = []
    let totalCost = 0 
    for (let i = 0; i < workersAndDays.length; i++){
        workersAndDays[i] = Number(workersAndDays[i])
    }
    while (!((workersAndDays.reduce((a, b) => a + b) / 30) == workersAndDays.length)){
        let dailyConcrete = 0
        for (let i = 0; i < workersAndDays.length; i++){
            if (workersAndDays[i] == 30){
                continue
            }
            else{
                workersAndDays[i]++
                dailyConcrete += 195
                totalCost += 1900 * 195
            }
        }
        concrete.push(dailyConcrete)
    }
    console.log(concrete.join(", "))
    console.log(`${totalCost} pesos`)
}
buildWall([21, 25, 28])