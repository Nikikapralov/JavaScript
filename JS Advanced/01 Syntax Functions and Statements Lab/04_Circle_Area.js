function circleArea(number){
    let type = typeof(number)
    if (type === "number"){
        let result = Math.PI * number ** 2
        console.log(result.toFixed(2))
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}

circleArea(3.5)
circleArea("name")