class Cat {
    constructor(name, age){
        this.name =  name
        this.age = age
        this.speak = ()  => {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
}


function createCats(array){
    for (let nameAge of array){
        let name = nameAge.split(" ")[0]
        let age = nameAge.split(" ")[1]
        let cat = new Cat(name, age)
        cat.speak()
    }
}

createCats(['Mellow 2', 'Tom 5'])