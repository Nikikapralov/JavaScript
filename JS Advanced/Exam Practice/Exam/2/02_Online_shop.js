class OnlineShop {

	constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace
        this.products = []
        this.sales = []
    }

    loadingStore(product, quantity, spaceRequired){

        if (spaceRequired > this.warehouseSpace){
            throw new Error(`Not enough space in the warehouse.`)
        }

        let toAdd = {"product": product, "quantity": quantity}
        this.warehouseSpace -= spaceRequired
        this.products.push(toAdd)

        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity){
        function getProduct(products, product){
            for (let entry of products){
                if (entry["product"] == product){
                    return entry
                }
            }
            return undefined
        }

        let returnedProduct = getProduct(this.products, product)

        if (returnedProduct == undefined){
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        if (minimalQuantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`)
        }

        if (minimalQuantity <= returnedProduct["quantity"]){
            return `You have enough from product ${product}.`
        }

        else if (minimalQuantity > returnedProduct["quantity"]){
            let difference = minimalQuantity - returnedProduct["quantity"]
            returnedProduct["quantity"] = minimalQuantity
            return `You added ${difference} more from the ${product} products.`
        }

    }

    sellProduct(product){
        function getProduct(products, product){
            for (let entry of products){
                if (entry["product"] == product){
                    return entry
                }
            }
            return undefined
        }
        let toSell = getProduct(this.products, product)

        if (toSell == undefined){
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        toSell["quantity"] -= 1
        let addToSales = {"product": product, "quantity": 1}
        this.sales.push(addToSales)

        return `The ${product} has been successfully sold.`
    }

    revision(){
        if (this.sales.length == 0){
            throw new Error(`There are no sales today!`)
        }

        let result = `You sold ${this.sales.length} products today!\n`
        result += `Products in the warehouse:\n`

        for(let product of this.products){
            result += `${product["product"]}-${product["quantity"]} more left\n`
        }

        return result.slice(0, result.length - 1)
    }
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


