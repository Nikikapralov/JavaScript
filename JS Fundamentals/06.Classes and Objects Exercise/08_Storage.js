class Storage{
    constructor(capacity){
        this.capacity = capacity
        this.storage = []
        this.totalCost = 0
        this.addProduct = (product) => {
            this.storage.push(product)
            this.totalCost += Number(product["price"]) * Number(product["quantity"])
            this.capacity -= Number(product["quantity"])
        }
        this.getProducts = () => {
            for (let product of this.storage){
                let result = JSON.stringify(product)
                console.log(result)
            }
        }
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
