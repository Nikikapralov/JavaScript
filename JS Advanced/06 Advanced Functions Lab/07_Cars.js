function solution(commands){
    let objects = []
    let object = {
        create: function create(name){
            let newObject = {
                name: name,
                inheritedBy: [],
                inherited: []
            }
            objects.push(newObject)
        },

        inherit: function inherit(get_name, parent_name){
            newObject = {}
            let getObject = objects.filter(a => a.name == get_name)[0]
            let result = Object.assign(newObject, getObject)
            result.name = parent_name
            getObject.inheritedBy.push(result)
            objects.push(result)

        },

        set: function set(get_name, key, value){
            let getObject = objects.filter(a => a.name == get_name)[0]
            getObject[key] = value
            for (let object of getObject.inheritedBy){
                object[key] = value
            }
        },

        print: function print(object_name){
            let result = []
            let currentObject = objects.filter(a => a.name == object_name)[0]
            for (let [key, value] of Object.entries(currentObject)){
                result.push(`${key}:${value}`)
            }
            console.log(result.join(','))
        }
    }
    for (let command of commands){
        let items = command.split(" ")
        if (items.length == 2){
            let [command, name] = items
            object[command](name)
        }
        else if(items.length == 4){
            if(items.includes("inherit")){
                let [none, name, command, get_name] = items
                object[command](get_name, name)
            }
            else{
                let [command, name, key, value] = items
                object[command](name, key, value)
            }
        }

    }
}

solution(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)
