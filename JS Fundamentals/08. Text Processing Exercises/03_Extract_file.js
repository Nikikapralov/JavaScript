function extractFile(input){
    let fileData = input.split("\\")
    let fileNameExtension = fileData.pop().split(".")
    let extension = fileNameExtension.pop()
    let fileName = fileNameExtension.join(".")
    let result = `File name: ${fileName}\nExtension: ${extension}`
    return result
}

let input = 'C:\\Internal\\training-internal\\Template.pptx'
let input_2 = 'C:\\Projects\\Data-Structures\\LinkedList.cocci.cs'

console.log(extractFile(input))
console.log(extractFile(input_2))