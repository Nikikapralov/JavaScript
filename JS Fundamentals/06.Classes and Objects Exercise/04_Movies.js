function movies(array){
    let allMovies = []
    let possibleCommands = ["addMovie", "directedBy", "onDate"]
    for (let entry of array){
       let items = entry.split(" ")
       for (let possibleCommand of items){
           let currentMovie = {}
           if (possibleCommands.includes(possibleCommand)){
               if (possibleCommand == "addMovie"){
                   currentMovie["name"] = items.slice(1).join(" ")
                   allMovies.push(currentMovie)
                   break
               }
               else if (possibleCommand == "directedBy"){
                let commandIndex = items.indexOf(possibleCommand)
                let movieName = items.slice(0, commandIndex).join(" ")
                let director = items.slice(commandIndex + 1).join(" ")
                   for (let movieObject of allMovies){
                       if (movieObject["name"] == movieName){
                           movieObject["director"] = director
                           break
                            }
                        }
                    break
               }
               else{
                let commandIndex = items.indexOf(possibleCommand)
                let movieName = items.slice(0, commandIndex).join(" ")
                let date = items.slice(commandIndex + 1).join(" ")
                for (let movieObject of allMovies){
                    if (movieObject["name"] == movieName){
                        movieObject["date"] = date
                        break
                        }
                    }
                    break
                }
            }

        }
        
    }
    for (let movie of allMovies){
        if ((movie["name"] == undefined) || (movie["director"] == undefined) || (movie["date"] == undefined)){
            console.log(allMovies)
            continue
        }
        else{
            console.log(JSON.stringify(movie))
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])