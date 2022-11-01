let expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe("Check functionality of isOddOrEven function.", function(){
    it("Function returns undefined when input is of type integer", function(){
        expect(isOddOrEven(10)).to.be.undefined
    }),
    it("Function returns undefined when input is of type object", function(){
        expect(isOddOrEven({})).to.be.undefined
    }),
    it("Function returns even when input is empty string", function(){
        expect(isOddOrEven("")).to.be.equal("even")
    }),
    it("Function returns even when input is of string even", function(){
        expect(isOddOrEven("123456")).to.be.equal("even")
    }),
    it("Function returns odd when input is of string odd", function(){
        expect(isOddOrEven("123")).to.be.equal("odd")
    })
})