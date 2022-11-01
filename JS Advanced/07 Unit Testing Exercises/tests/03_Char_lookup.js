const { expect } = require("chai");


function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe("Unit tests for lookupChar function", function(){
    it("Returns undefined if first parameter is not string but integer", function(){
        expect(lookupChar(1, 10)).to.be.undefined
    }),
    it("Returns undefined if second parameter is not int but string", function(){
        expect(lookupChar("test", "1")).to.be.undefined
    }),
    it("Returns incorrect index when index bigger than length of string", function(){
        expect(lookupChar("test", 5)).to.be.equal("Incorrect index")
    }),
    it("Returns incorrect index whehn index equal to length of string", function(){
        expect(lookupChar("test", 4)).to.be.equal("Incorrect index")
    }),
    it("Returns corrrect char", function(){
        expect(lookupChar("test", 0)).to.be.equal("t")
    }),
    it("Returns incorrect index when string is empty string and int is equal to length", function(){
        expect(lookupChar("", 0)).to.be.equal("Incorrect index")
    }),
    it("Returns indefined if second parameter is float", function(){
        expect(lookupChar("test", 2.6)).to.be.undefined
    }),
    it("Returns incorrect index if second parameter is negative", function(){
        expect(lookupChar("test", -1)).to.be.equal("Incorrect index")
    })
})