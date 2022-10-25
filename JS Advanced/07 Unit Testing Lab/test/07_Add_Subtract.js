const { expect } = require("chai");

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}


describe("Test createCalculator functionalities", function(){
    it("Returns an object", function(){
        expect(typeof createCalculator()).to.be.equal(typeof {})
    }),
    it("Has property add", function(){
        expect(createCalculator()).has.property("add")
    }),
    it("Has property subtract", function(){
        expect(createCalculator()).has.property("subtract")
    }),
    it("Has property get", function(){
        expect(createCalculator()).has.property("get")
    }),
    it("Add takes a property as string to be converted to number", function(){
        let calculator = createCalculator()
        calculator.add("10")
        expect(calculator.get()).to.be.equal(10)
    }),
    it("Add takes a property as integer to be converted to number", function(){
        let calculator = createCalculator()
        calculator.add(10)
        expect(calculator.get()).to.be.equal(10)
    }),
    it("Subtract takes a property as string to be converted to number", function(){
        let calculator = createCalculator()
        calculator.subtract("-10")
        expect(calculator.get()).to.be.equal(10)
    }),
    it("Subtract takes a property as integer to be converted to number", function(){
        let calculator = createCalculator()
        calculator.subtract(10)
        expect(calculator.get()).to.be.equal(-10)
    }),
    it("Get returns the value of the internal sum successfully", function(){
        let calculator = createCalculator()
        calculator.add(10)
        calculator.subtract("5")
        expect(calculator.get()).to.be.equal(5)
    }),
    it("Calculator has an internal value that cannot be accessed", function(){
        let calculator = createCalculator()
        expect(calculator.value).to.be.undefined
    })
    
})