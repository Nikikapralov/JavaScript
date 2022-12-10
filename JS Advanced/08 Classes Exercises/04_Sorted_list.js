class List{
    constructor(){
        this.elements = []
        this.size = 0
    }
    add(element){
        this.elements.push(element)
        this.size += 1
        this.elements.sort((a, b) => a - b)
    }

    remove(index){
        if (0 <= index && index < this.size){
            this.elements.splice(index, 1)
            this.size -= 1
            this.elements.sort((a, b) => a - b)
        }
    }

    get(index){
        if (0 <= index && index < this.size){
            return this.elements[index]
        }
    }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
