function play(input){
    let playersMap = {}
    let playerCardsCalculated = {}

    function calculateScore(playerCards, player){
        const powers = {"C": 1, "D": 2, "H": 3, "S": 4}
        const cards = {"1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14}
        let score = 0
        for (let card of playerCards){
            if (!playerCardsCalculated[player].includes(card)){
                playerCardsCalculated[player].push(card)
                const regex = /\d+|[JQKA]/g;
                const cardType = card.match(regex)[0]
                const power = card.split(cardType)[1]
                score += cards[cardType] * powers[power]
            }
        }
        return score
    }

    for (let entry of input){
        let [player, cards] = entry.split(": ")
        if (!Object.keys(playersMap).includes(player)){
            playerCardsCalculated[player] = []
            playersMap[player] = calculateScore(cards.split(", "), player)
        }
        else{
            playersMap[player] += calculateScore(cards.split(", "), player)
        }
    }
    return playersMap
}


let input = [
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]

    

console.log(play(input))