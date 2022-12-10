class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString
        this.innerLength = innerLength
    }
    increase(value){
        this.innerLength += value
    }
    decrease(value){
        this.innerLength -= value
        if (this.innerLength < 0){
            this.innerLength = 0
        }
    }
    toString(){
        let stringLength = this.innerString.length
        if (0 < this.innerLength && this.innerLength < stringLength){
            let newString = this.innerString.slice(0, this.innerLength)
            return newString + "..."
        }
        else if (this.innerLength == 0){
            return "..."
        }

        else {
            return this.innerString
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
