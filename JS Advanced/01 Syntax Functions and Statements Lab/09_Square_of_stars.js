function square(parameter){
    if (parameter == undefined){
        parameter = 5
    }
    for (let i = 0; i < parameter; i++){
        console.log("* ".repeat(parameter).trim())
    }
}
square(3)