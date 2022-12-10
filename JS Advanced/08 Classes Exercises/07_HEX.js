class Hex{
    constructor(value){
        this.value = Number(value)
    }

    valueOf(){
        return this.value
    }

    toString(){
        let hexRepresantation = this.value.toString(16)
        return "0x" + hexRepresantation.toUpperCase()
    }

    plus(number){
        if (!typeof number == "number"){
            number = parseInt(number, 16)
        }
        let result = this.value + number
        return new Hex(result)
    }

    minus(number){
        if (!typeof number == "number"){
            number = parseInt(number, 16)
        }
        let result = this.value - number
        return new Hex(result)
    }

   static parse(string){
        return parseInt(string, 16)
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString())
console.log(a.plus(b).toString()==='0xF');
console.log(Hex.parse('AAA'));
