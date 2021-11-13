[
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    

    function assign(array){
        let dictionary = {}
        for (let element of array){
            dictionary[element] = element.length

        }
        for (let [name, number] of Object.entries(dictionary)){
            console.log(`Name: ${name} -- Personal Number: ${number}`)
        }
    }

assign([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
        ])