function solve(number, ...array){
    number = Number(number)
    for (item of array){
        if (item == "chop"){
            number /= 2
        }
        else if (item == "dice"){
            number = Math.sqrt(number)
        }
        else if (item == "spice"){
            number += 1
        }
        else if (item == "bake"){
            number *= 3
        }
        else if (item == "fillet"){
            number -= number * 0.2
        }
    console.log(number)
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')