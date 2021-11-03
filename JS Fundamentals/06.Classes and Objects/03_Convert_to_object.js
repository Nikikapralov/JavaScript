function convert(text){
    object = JSON.parse(text)
    for (let [key, value] of Object.entries(object)){
        console.log(`${key}: ${value}`)
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}')