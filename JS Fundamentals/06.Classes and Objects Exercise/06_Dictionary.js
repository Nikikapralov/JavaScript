function makeDictionary(array){
    let dictionary = []
    for (let item of array){
        item = JSON.parse(item)
        dictionary.push({"Term": Object.keys(item)[0], "Definition": Object.values(item)[0]})
    }
    let orderedDictionary = dictionary.sort((a, b) => a["Term"].localeCompare(b['Term']))
    for (let item of orderedDictionary){
        console.log(`Term: ${item["Term"]} => Definition: ${item['Definition']}`)
    }
}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])
    