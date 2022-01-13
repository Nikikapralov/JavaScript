function solve(fruit, grams, price){
   let weightInKG = (grams / 1000)
   let total = price * weightInKG
   console.log(`I need $${total.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`)
}


solve('orange', 2500, 1.80)