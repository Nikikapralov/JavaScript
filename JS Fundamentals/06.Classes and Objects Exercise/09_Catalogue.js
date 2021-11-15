function sortedCatalogue(array){
    let catalogue = {}
    for (let string of array){
        let items = string.split(" : ")
        let name = items[0]
        let price = items[1]
        let firstLetter = name[0]
        if (Object.keys(catalogue).includes(firstLetter)){
            catalogue[firstLetter].push([name, price])
        }
        else{
            catalogue[firstLetter] = [[name, price]]
        }
  }
 let arrayCatalogue = Object.entries(catalogue)
 let orderedLetters = arrayCatalogue.sort((a, b) => a.toString().localeCompare(b))
 for (let value of orderedLetters){
     value[1].sort(function (a, b) {
         if (a[0] > b[0]){
             return 1
         }
         else if (a[0] < b[0]){
             return -1
         }
         else{
             return 0
         }
     })
 }
 for (let obj of arrayCatalogue){
     console.log(obj[0])
     for (let item of obj[1]){
         console.log(`  ${item[0]} : ${item[1]}`)
        }
    }
}


sortedCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
    )