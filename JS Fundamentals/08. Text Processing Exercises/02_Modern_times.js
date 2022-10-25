function hashTag(input){
    let words = input.split(" ")
    let hashTags = []
    for (let word of words){
        let flag = true
        if (word.startsWith("#") && word.length > 1){
            for (let letter of word.slice(1)){
                if ((letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90)
                    || (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122)){
                continue
                }
                else{
                    flag = false
                    break
                }
            }
            if (flag){
                hashTags.push(word)
            }
            
        }
    }
    return hashTags
}

let input = 'Nowadays everyone uses # to tag a #special word in #socialMedia and #test123 #test@'

console.log(hashTag(input))