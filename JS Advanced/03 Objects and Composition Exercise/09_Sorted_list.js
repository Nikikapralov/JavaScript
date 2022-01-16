function createSortedList(){
    let sortedList = {
        "collection": [],
        "size": 0,
        add(element){
            this.collection.push(element)
            this.collection.sort((a, b) => a - b)
            this.size = this.collection.length
        },
        remove(index){
            if (0 <= index && index <= this.size - 1){
                let element = this.collection.splice(index, 1)
                this.collection.sort((a, b) => a - b)
                this.size = this.collection.length
                return element
            }
        },
        get(index){
            if (0 <= index && index <= this.size - 1){
                let element = this.collection[index]
                return element
            }
        },
    }
    return sortedList
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.collection)
console.log(list.get(1)); 
list.remove(1);
console.log(list.collection)
console.log(list.get(1));
