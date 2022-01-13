function solve(n1, n2, string){
    let result
    switch (string) {
        case '+': result = n1 + n2; break
        case '-': result = n1 - n2; break
        case '*': result = n1 * n2; break
        case '/': result = n1 / n2; break
        case '%': result = n1 % n2; break
        case '**': result = n1 ** n2; break
    }
    console.log(result)
}