function between(n1, n2, n3){
    if (n2 <= n1 && n1 <=n3){
        return true
    }
    return false
}
function Age(years){
    if (between(years, 0, 2)){
        console.log('baby')
    }
    else if (between(years, 3, 13)){
        console.log('child')
    }
    else if (between(years, 14, 19)){
        console.log('teenager')
    }
    else if (between(years, 20, 65)){
        console.log('adult')
    }
    else if (years >= 66){
        console.log('elder')
    }
    else{
        console.log('out of bounds')
    }
}

Age(0)
Age(1)
Age(2)
Age(8)
Age(15)
Age(25)
Age(66)
Age(-3)