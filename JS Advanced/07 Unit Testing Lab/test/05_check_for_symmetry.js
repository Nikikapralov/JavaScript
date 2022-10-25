const { expect } = require("chai");

function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe("Tests for isSymmetric function", function (){
    it("If input is not an array, return false", function(){
        expect(isSymmetric("string")).to.be.false
    }),
    it("Returns True when symmetric array", function (){
        expect(isSymmetric([1, 1])).to.be.true
    }),
    it("Returns false when array not symmetric", function (){
        expect(isSymmetric([1, 1, 2])).to.be.false
    }),
    it("Returns false if input is an integer", function(){
        expect(isSymmetric(1)).to.be.false
    }),
    it("Returns false if input is an object", function(){
        expect(isSymmetric({})).to.be.false
    }),
    it("Returns true when array is symmetric but odd elements", function(){
        expect(isSymmetric([1, 1, 1])).to.be.true
    }),
    it("Returns true when passed an empty array", function(){
        expect(isSymmetric([])).to.be.true
    }),
    it("Returns false when array holds 2 different types", function(){
        expect(isSymmetric([1, "1"])).to.be.false
    })
})
