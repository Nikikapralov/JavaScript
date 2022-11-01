const { expect } = require("chai");

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe("Tests for object mathEnforcer", function(){
    describe("Tests for method addFive", function(){
        it("Returns undefined if typeof parameter is a string", function(){
            expect(mathEnforcer.addFive("string")).to.be.undefined
        }),
        it("Returns undefined if typeof parameter is an object", function(){
            expect(mathEnforcer.addFive({})).to.be.undefined
        }),
        it("Returns undefined if typeof parameter is an array", function(){
            expect(mathEnforcer.addFive([])).to.be.undefined
        }),
        it("Returns correct answer when parameter is integer", function(){
            expect(mathEnforcer.addFive(1)).to.be.equal(6)
        }),
        it("Returns correct answer when parameter is float", function(){
            expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.0000001)
        }),
        it("Returns correct answer when parameter is negative value", function(){
            expect(mathEnforcer.addFive(-1)).to.be.equal(4)
        })
    }),
    describe("Tests for method subtractTen", function(){
        it("Returns undefined if typeof parameter is a string", function(){
            expect(mathEnforcer.subtractTen("string")).to.be.undefined
        }),
        it("Returns undefined if typeof parameter is an object", function(){
            expect(mathEnforcer.subtractTen({})).to.be.undefined
        }),
        it("Returns undefined if typeof parameter is an array", function(){
            expect(mathEnforcer.subtractTen([])).to.be.undefined
        }),
        it("Returns correct answer when parameter is integer", function(){
            expect(mathEnforcer.subtractTen(16)).to.be.equal(6)
        }),
        it("Returns correct answer when parameter is float", function(){
            expect(mathEnforcer.subtractTen(15.1)).to.be.closeTo(5.1, 0.0000001)
        }),
        it("Returns correct answer when parameter is negative value", function(){
            expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11)
        })
    }),
    describe("Tests for method sum", function(){
        it("Returns undefined if typeof first parameter is a string", function(){
            expect(mathEnforcer.sum("string", 1)).to.be.undefined
        }),
        it("Returns undefined if typeof first parameter is an object", function(){
            expect(mathEnforcer.sum({}, 1)).to.be.undefined
        }),
        it("Returns undefined if typeof first parameter is an array", function(){
            expect(mathEnforcer.sum([], 1)).to.be.undefined
        }),
        it("Returns undefined if typeof second parameter is a string", function(){
            expect(mathEnforcer.sum(1, "string")).to.be.undefined
        }),
        it("Returns undefined if typeof second parameter is an object", function(){
            expect(mathEnforcer.sum(1, {})).to.be.undefined
        }),
        it("Returns undefined if typeof second parameter is an array", function(){
            expect(mathEnforcer.sum(1, [])).to.be.undefined
        }),
        it("Returns correct answer when parameters are integer", function(){
            expect(mathEnforcer.sum(16, 1)).to.be.equal(17)
        }),
        it("Returns correct answer when parameters are float", function(){
            expect(mathEnforcer.sum(5.0, 0.1)).to.be.closeTo(5.1, 0.0000001)
        }),
        it("Returns correct sum when first parameter is integer and second float", function(){
            expect(mathEnforcer.sum(5, 0.1)).to.be.closeTo(5.1, 0.0000001)
        }),
        it("Returns correct answer when parameter is negative value", function(){
            expect(mathEnforcer.sum(-1, -2)).to.be.equal(-3)
        })
    })
})