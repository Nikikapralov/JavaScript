function execute(n1, n2, oper){
    switch (oper){
        case 'multiply':
            result = n1 * n2
            break
        case "divide":
            result = n1 / n2
            break
        case "add":
            result = n1 + n2
            break
        case 'subtract':
            result = n1 - n2
            break
    }
    return result
}
execute(12, 19, 'add')