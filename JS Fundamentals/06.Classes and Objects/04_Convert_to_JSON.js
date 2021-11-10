function toJSON(name, surname, hairColour){
    let object = {"name": name, "lastname": surname, "hairColour": hairColour}
    return JSON.stringify(object)
}

console.log(toJSON())