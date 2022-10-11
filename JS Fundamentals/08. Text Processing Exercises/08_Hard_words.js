function fill(input){
    let [letter, words] = input
    splitLetter = letter.split(" ")
    let replaceMap = {}
    for (let word of splitLetter){
        if (word.startsWith("_")){
            correspondingWord = findCorresponding(words, word.length)
            replaceMap[word] = correspondingWord
        }
    }
    for (let [entry, correspondingWord] of Object.entries(replaceMap)){
        letter = letter.replace(entry, correspondingWord)
    }
    return letter
}

let input = ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a _________. My brother\'s ankle is _______, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]

console.log(fill(input))

function findCorresponding(words, length){
    for (let word of words){
        if (word.length == length){
            return word
        }
    }
}