function cardFactory(face, suit){
    class Card{
        availableSuits = {
            "S": "♠",
            "H": "♥",
            "D": "♦",
            "C": "♣",
        }
        availableFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

        constructor(face, suit){
            this.face = face
            this.suit = suit
        }

        get face(){
            return this._face
        }

        set face(value){
            if (!this.availableFaces.includes(value)){
                throw new Error()
            }
            this._face = value
        }

        get suit(){
            return this._suit
        }

        set suit(value){
            if (!Object.keys(this.availableSuits).includes(value)){
                throw new Error
            }
            this._suit = this.availableSuits[value]
        }

        toString(){
            return `${this.face}${this.suit}`
        }

    }

    let card = new Card(face, suit)
    return card

}

card = cardFactory('J', 'C')
console.log(card.toString())