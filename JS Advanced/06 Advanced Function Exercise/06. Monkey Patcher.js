function result(action){
    let commands = {
        upvote: function(object){
            object.upvotes += 1

        },
        downvote: function(object){
            object.downvotes += 1
        },
        score: function(object){

            let totalVotes = object.upvotes + object.downvotes
            let upvotes
            let downvotes
            let rating

            if (totalVotes > 50){

                let obfuscationNumber = Math.ceil(Math.max(object.upvotes, object.downvotes) * 0.25)
                upvotes = object.upvotes + obfuscationNumber
                downvotes = object.downvotes + obfuscationNumber
                
            }
            else{
                upvotes = object.upvotes
                downvotes = object.downvotes
            }

            let totalScore = object.upvotes + object.downvotes
            let balance = object.upvotes - object.downvotes

            if (totalScore < 10){
                rating = "new"
            }
            else if(object.upvotes > totalScore * 0.66){
                rating = "hot"
            }
            else if(balance >= 0 && totalScore > 100){
                rating = "controversial"
            }
            else if (balance < 0){
                rating = "unpopular"
            }
            else{
                rating = "new"
            }
        
            return [upvotes, downvotes, balance, rating]
        }
    }

    return commands[action](this)

}




var forumPost = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 300
};

var answer = result.call(forumPost, 'score');
console.log(answer)
