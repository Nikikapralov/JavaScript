function solve(commands){
    let collection = []
    let object = {

        add: function add(string){
            collection.push(string)
        },

        remove: function remove(string){
           collection = collection.filter(a => a != string)
            },
        
        print: function print(){
            console.log(collection.join(","))

        }
    }
    for (let command of commands){
        let [func, string] = command.split(" ")
        object[func](string)

    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])