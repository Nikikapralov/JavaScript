class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable
        this.plants = []
        this.storage = []
    }

    addPlant(plantName, spaceRequired){
        if (this.spaceAvailable < spaceRequired){
            throw new Error("Not enough space in the garden.")
        }

        let plantToAdd = {"name": plantName, "space": spaceRequired, "ripe": false, "quantity": 0}
        this.spaceAvailable -= spaceRequired
        this.plants.push(plantToAdd)
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity){
        function getPlant(plants){
            for (let plantItem of plants){
                if (plantItem["name"] == plantName){
                    return plantItem
                }
            }
            return undefined
        }

        let plant = getPlant(this.plants)

        if (plant == undefined){
            return `There is no ${plantName} in the garden.`
        }

        if (plant["ripe"]){
            throw new Error(`The ${plantName} is already ripe.`)
        }

        if (quantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`)
        }

        plant["ripe"] = true
        plant["quantity"] += quantity
        
        if (quantity == 1){
            return `${quantity} ${plantName} has successfully ripened.`
        }

        else if (quantity > 1){
            return `${quantity} ${plantName}s have successfully ripened`
        }

    }

    harvestPlant(plantName){

        function getPlant(plants){
            for (let plantItem of plants){
                if (plantItem["name"] == plantName){
                    return plantItem
                }
            }
            return undefined
        }

        let plant = getPlant(this.plants)

        if (plant == undefined){
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (plant["ripe"] == false){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

    }

    generateReport(){

    }

}

g = new Garden(10)
g.addPlant("123", 3)
console.log(g.ripenPlant("123", 3))