export function buildKeyHistory(data, searchForKey, keyHistory=null, level=0){
    // Recursively build the key history inside a nested dictionary
    // so that we can update the data dictionary correctly.
    // Basically do a depth first search of a tree like structure. (TY DS and Algorithms.)
    // Start building doing a depth first search. Once we find the key and only then,
    // we mark it as "found" and we begin to push other keys leading to it while we backtrack.
    // Since we get all of that in reverse, we keep a track of the current level and once we
    // reach 0, we reverse the order and return the array of keys leading to our desired value.

    if (keyHistory == null){
        keyHistory = []
    }

    for (let key of Object.keys(data)){
        if (key == searchForKey){
            keyHistory.push(key)
            --level
            return keyHistory
        }
        if (typeof data[key] == "object"){
            buildKeyHistory(data[key], searchForKey, keyHistory, ++level)
            if (keyHistory.length >= 1){
                keyHistory.push(key)
                --level
                if (level == 0){
                    return keyHistory.reverse()
                }
            }
        }
    }
    return keyHistory
}


export function getValueFromPath(obj, path) {
    // Use reduce to dynamically build the path to the dictionary and access the value.
    // Reduce accumulates the result. So first it is object["address"] then object["address"]["street_number"]
    //return path.reduce((acc, key) => acc && acc[key], obj);

    // Take care of no path found, key wrong.
    if (path.length <= 0){ 
        return "Error encountered."
    }

    // Path found but key is wrong. Impossible unless the source code changes in between execution.
    for (let value of path){
        try{
            obj = obj[value]
        }
        catch {
            return "Error encountered."
        }
    }
    return obj
  }


export function updateValueFromPath(obj, path, toUpdate){
    // Update a value at the end of the path.
    if (path.length <= 0){ 
        return obj
    }

    // If only one, return the last item.
    let final = path[path.length - 1] 


    // Cycle through the items untill you get to the last one.
    for (let value of path.slice(0, path.length - 1)){
        try{
            obj = obj[value]
        }
        catch {
            return obj
        }
    }

    // Update value
    obj[final] = toUpdate
    return obj

}
  

export function buildNewObjectTreeLike(previousErrorFormStatus, value, path){
    let newObject = {...previousErrorFormStatus}
    updateValueFromPath(newObject, path, value)
    return newObject
}