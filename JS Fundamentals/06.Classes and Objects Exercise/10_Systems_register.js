function buildRegister(array){
    let register = {}
    for (let item of array){
        let items = item.split(' | ')
        let system = items[0]
        let subsystem = items[1]
        let component = items[2]
        if (Object.keys(register).includes(system)){
            if (Object.keys(register[system]).includes(subsystem)){
                register[system][subsystem].push(component)
            }
            else{
                register[system][subsystem] = [component]

            }
        }
            
        else{
            register[system] = {[subsystem]: [component]}
        }
    }
    let result = Object.entries(register).sort(function(a, b){
        if (Object.keys(a[1]).length > Object.keys(b[1]).length){
            return -1
        }
        else if (Object.keys(a[1]).length < Object.keys(b[1]).length){
            return 1
        }
        else{
            if (a[0] > b[0]){
                return 1
            }
            else if (a[0] < b[0]){
                return -1
            }
            else{
                return 0
            }
        }
    })
    console.log(result)
    for (let group of result){
        let system = group[0]
        let dict = group[1]
        console.log(`${system}`)
        for (let subsystem of Object.keys(dict)){
            console.log(`|||${subsystem}`)
            for (let component of dict[subsystem]){
                console.log(`||||||${component}`)
            }
        }
    }
}










buildRegister(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
   'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
    )