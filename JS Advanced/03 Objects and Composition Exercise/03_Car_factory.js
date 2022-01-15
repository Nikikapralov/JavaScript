function solve(object){
    let engines = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    }

    let enginesOrdered = ["Small engine", "Normal engine", "Monster engine"]

    let carriages = {
        'hatchback': { type: 'hatchback', color: null},
        'coupe': { type: 'coupe', color: null}
    }
    let result = {model: null,
                  engine: null,
                  carriage: null,
                  wheels: null}
    
    result.model = object.model
    let requiredPower = object.power
    for (let current of enginesOrdered){
        if (engines[current].power >= requiredPower){
            result.engine = engines[current]
            break
        }
    }
    let requiredColor = object.color
    result.carriage = carriages[object.carriage]
    result.carriage.color = requiredColor
    let requiredWheelSize = object.wheelsize
    if (requiredWheelSize % 2 == 0){
        requiredWheelSize--
    }
    result.wheels = [requiredWheelSize, requiredWheelSize, requiredWheelSize, requiredWheelSize]
    return result
}

solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)