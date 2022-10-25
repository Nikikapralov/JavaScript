function deckFunc(array){
    let allCards = []

    class Card{
        availableSuits = {
            "S": "♠",
            "H": "♥",
            "D": "♦",
            "C": "♣",
        }
        availableFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

        constructor(face, suit){
            this.placeholderFace = face
            this.placeholderSuit = suit
            this.face = face
            this.suit = suit
        }

        get face(){
            return this._face
        }

        set face(value){
            if (!this.availableFaces.includes(value)){
                return
            }
            this._face = value
        }

        get suit(){
            return this._suit
        }

        set suit(value){
            if (!Object.keys(this.availableSuits).includes(value)){
                return
            }
            this._suit = this.availableSuits[value]
        }

        toString(){
            return `${this.face}${this.suit}`
        }
    }

    for (let item of array){
        let currentFaceRegEx = /^[0-9JQKA]+/;
        let currentSuitRegEx = /[A-Z]/;
        let currentFace = item.match(currentFaceRegEx)
        let startIndex = currentFace.length
        let newItem = item.slice(startIndex)
        let currentSuit = newItem.match(currentSuitRegEx)
        if (currentSuit == null || currentFace == null){
            return `Invalid card: ${this.placeholderFace}${this.placeholderSuit}`
        }
        let currentCard = new Card(currentFace[0], currentSuit[0])
        if (currentCard.face != undefined && currentCard.suit != undefined){
            allCards.push(currentCard.toString())
        }
        else{
            return `Invalid card: ${currentFace}${currentSuit}`
        }
    }

    return allCards.join(" ")
}

console.log(deckFunc(['AS', '10D', 'KH', '2C']))
console.log(deckFunc(['5S', '3D', 'QD', '1C']))