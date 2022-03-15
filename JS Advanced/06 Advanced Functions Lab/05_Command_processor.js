function solution(){
    let string = ""
    let object = {
        append: function append(item){
            string += item
        },
        removeStart: function removeStart(amount){
            string = string.substring(amount)
        },
        removeEnd: function removeEnd(amount){
            string = string.substring(0, string.length - amount)
        },
        print: function print(){
            console.log(string)
        }
    }
    return object
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

