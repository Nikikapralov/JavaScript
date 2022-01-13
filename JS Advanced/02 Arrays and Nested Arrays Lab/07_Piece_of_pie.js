function solve(array, start, end){
    let startI = array.indexOf(start)
    let endI = array.indexOf(end)
    return array.slice(startI, endI + 1)
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Pumpkin Pie',
'Sugar Cream Pie'
))