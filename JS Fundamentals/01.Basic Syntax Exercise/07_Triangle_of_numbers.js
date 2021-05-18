function Triange(number){
    for (let i = 1; i <= number; i++){
        let line = ''
        for (let n = 1; n <= i; n++){
            line += i + ' '
        }
        console.log(line.trimRight())
    }
}
Triange(3)