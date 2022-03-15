function solution(){

    let recipes = {
        apple: {carbohydrate: 1, flavour: 2, protein: 0, fat: 0},
        lemonade: {carbohydrate: 10, flavour: 20, protein: 0, fat: 0},
        burger: {carbohydrate: 5, flavour: 3, protein: 0, fat: 7},
        eggs: {carbohydrate: 0, flavour: 1, protein: 5, fat: 1},
        turkey: {carbohydrate: 10, flavour: 10, protein: 10, fat: 10},
    }

    let stock = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0}

    function manager(string){

        let commands = {

            restock: function(microelement, quantity) {
                stock[microelement] += quantity
                return "Success"
            },
            
            prepare: function(recipy, quantity){
                let requiredCarbohydrate = recipes[recipy].carbohydrate * quantity
                let requiredFlavour = recipes[recipy].flavour * quantity
                let requiredProtein = recipes[recipy].protein * quantity
                let requiredFat = recipes[recipy].fat * quantity

                let requirements = {protein: requiredProtein, carbohydrate: requiredCarbohydrate, fat: requiredFat,
                     flavour: requiredFlavour}

                for (let key in requirements){
                    if (stock[key] < requirements[key]){
                        return `Error: not enough ${key} in stock`
                    }
                }
                
                stock.carbohydrate -= requiredCarbohydrate
                stock.fat -= requiredFat
                stock.flavour -= requiredFlavour
                stock.protein -= requiredProtein

                return "Success"
            },
            
            report: function(){
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
            }
        }

        if (string == "report"){
            return commands.report()
        }
        else{
            let [command, item, quantity] = string.split(" ")
            quantity = Number(quantity)
            return commands[command](item, quantity)
        }


    }

    return manager
}

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 

