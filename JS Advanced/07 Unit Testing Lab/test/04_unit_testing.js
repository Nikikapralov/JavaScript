let expect = require("chai").expect
function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

describe("Test for function sum", function () {
    it("Should return zero if the array is empty", function (){
        expect(0).to.be.equal(sum([]))}),
    
    it("Should return correct sum", function(){
        expect(10).to.be.equal(sum([1, 2, 3, 4]))})
    })