function Language(country){
    let countries = ['Spain', 'Argentina', 'Mexico']
    if (country == 'USA' || country == 'England'){
        console.log('English')
    }
    else if (countries.includes(country)){
        console.log('Spanish')
    }
    else{
        console.log('unknown')
    }
}

Language('USA')
Language('England')
Language('Spain')
Language('Argentina')
Language('Mexico')
Language('Bulgaria')
Language('')