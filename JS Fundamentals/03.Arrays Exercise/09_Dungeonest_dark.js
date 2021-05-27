function dungeon(arrayString){
    let hp = 100
    let coins = 0
    let array = arrayString[0].split('|')
    for (let i = 0; i < array.length; i++){
        let elementArray = array[i].split(' ')
        let firstPart = elementArray[0]
        let secondPart = Number(elementArray[1])
        if (firstPart == 'potion'){
            let previousHP = hp
            hp += secondPart
            let healedFor = secondPart
            if (hp > 100){
                hp = 100
                healedFor = hp - previousHP
            }
            console.log(`You healed for ${healedFor} hp.`)
            console.log(`Current health: ${hp} hp.`)
        }
        else if (firstPart == 'chest'){
            coins += secondPart
            console.log(`You found ${secondPart} coins.`)
        }
        else{
            hp -= secondPart
            if (hp <= 0){
                console.log(`You died! Killed by ${firstPart}.`)
                console.log(`Best room: ${i + 1}`)
                return
            }
            else{
                console.log(`You slayed ${firstPart}.`)

            }
        }
    }
    console.log(`You've made it!`)
    console.log(`Coins: ${coins}`)
    console.log(`Health: ${hp}`)
}
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])