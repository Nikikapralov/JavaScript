function validate(input){
    const funcs = {"method": validateMethod, "uri": validateURI,
    "version": validateVersion, "message": validateMessage}
    if (!checkAllAttributes(input)){
        return false
    }

    for (let [method, func] of Object.entries(funcs)){
        func(input[method])
    }

    return input

}

function validateMethod(method){
    const availableMethods = ["GET", "POST", "CONNECT", "DELETE"]
    if (!availableMethods.includes(method)){
        let errorMessage = `Invalid request header: Invalid Method`
        throw new Error(errorMessage)
    }
    return true
}

function validateURI(uri){
    const errorMessage = `Invalid request header: Invalid URI`
    const regex = /^(\w+\.)+\w+$/
    if (uri === ""){
        throw new Error(errorMessage)
    }
    if (uri !== "*"){
        let matches = uri.match(regex)
        if (matches === null){
            throw new Error(errorMessage)
        }
    }
    return true
}

function validateVersion(version){
    const availableVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"]
    if (!availableVersions.includes(version)){
        const errorMessage = `Invalid request header: Invalid Version`
        throw new Error(errorMessage)
    }
    return true

}
function validateMessage(message){
    const regex = /^[^<>\\&'"]+&/
    const errorMessage = `Invalid request header: Invalid Message`
    const matchedMessage = message.match(regex)
    if (matchedMessage == null){
        throw new Error(errorMessage)
    }
    return true

}

function checkAllAttributes(object){
    const mustHaves = ["method", "uri", "version", "message"]
    for (let entry of mustHaves){
        if (!object.hasOwnProperty(entry)){
            let errorMessage = `Invalid request header: Invalid ${entry.slice(0, 1).toUpperCase() + entry.slice(1)}`
            throw new Error(errorMessage)
        }
    }
    return true
}

let input = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }

let input_2 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }

let input_3 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*',
  }

console.log(validate(input))
console.log(validate(input_3))
console.log(validate(input_2))