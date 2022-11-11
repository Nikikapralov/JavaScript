class Person{
    constructor(first_name, last_name){
        this._first_name = first_name
        this._last_name = last_name
    }

    get firstName(){
        return this._first_name
    }

    set firstName(value){
        this._first_name = value
    }

    get lastName(){
        return this._last_name
    }

    set lastName(value){
        this._last_name = value
    }

    get fullName(){
        return `${this._first_name} ${this._last_name}`
    }

    set fullName(value){
        let [first_Name, last_Name, ...args] = value.split(" ")
        this.firstName = first_Name != undefined && last_Name != undefined && args.length == 0 ? first_Name : this._first_name
        this.lastName = last_Name != undefined && first_Name != undefined && args.length == 0 ? last_Name : this._last_name
    }
}

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter T P";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson

