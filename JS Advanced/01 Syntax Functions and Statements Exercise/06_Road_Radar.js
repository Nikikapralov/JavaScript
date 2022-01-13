function solve(speed, area){
    let areaAndSpeedLimit = {"motorway": 130, "interstate": 90, "city": 50, "residential": 20}
    if (speed <= areaAndSpeedLimit[area]){
        console.log(`Driving ${speed} km/h in a ${areaAndSpeedLimit[area]} zone`)
    }
    else{
        let speedDifference = speed - areaAndSpeedLimit[area]
        if (speedDifference <= 20){
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${areaAndSpeedLimit[area]} - speeding`)
        }
        else if (speedDifference <= 40){
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${areaAndSpeedLimit[area]} - excessive speeding`)
        }
        else{
            console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${areaAndSpeedLimit[area]} - reckless driving`)
        }
    }
}

solve(71, 'city')