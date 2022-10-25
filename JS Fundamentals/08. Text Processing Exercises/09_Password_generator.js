function generate(input){
    let vowels = Array.from("aeuio")
    let [word_1, word_2, mixup] = input
    let passwordCore = Array.from(word_1 + word_2)
    mixup = Array.from(mixup)
    for (let i = 0; i < passwordCore.length; i++){
        if (vowels.includes(passwordCore[i])){
            passwordCore[i] = mixup.shift().toUpperCase()
            mixup.push(passwordCore[i])
        }
    }
    return `Your generated password is ${passwordCore.reverse().join("")}`
}
let input = [
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]

let input_2 = [
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]

let input_3 = [
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ]

console.log(generate(input))
console.log(generate(input_2))
console.log(generate(input_3))