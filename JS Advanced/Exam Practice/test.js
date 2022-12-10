const { expect } = require("chai");

const motorcycleRider = {
    licenseRestriction(category) {
      if (category === "AM") {
        return 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
      } else if (category === "A1") {
        return 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
      } else if (category === "A2") {
        return 'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
      } else if (category === "A") {
        return 'No motorcycle restrictions, and the minimum age is 24.'
      } else {
        throw new Error("Invalid Information!");
      }
    },
    motorcycleShowroom(engineVolume, maximumEngineVolume) {
      if (!Array.isArray(engineVolume) || typeof maximumEngineVolume !== "number" || engineVolume.length < 1 || maximumEngineVolume < 50) {
        throw new Error("Invalid Information!");
      }
      let availableBikes = [];
      engineVolume.forEach((engine) => {
  
        if (engine <= maximumEngineVolume && engine >= 50) {
          availableBikes.push(engine);
        }
      });
      return `There are ${availableBikes.length} available motorcycles matching your criteria!`;
    },
    otherSpendings(equipment, consumables, discount) {
      if (
        !Array.isArray(equipment) ||
        !Array.isArray(consumables) ||
        typeof discount !== "boolean"
      ) {
        throw new Error("Invalid Information!");
      }
      let totalPrice = 0;
  
      equipment.forEach((element) => {
        if (element === "helmet") {
          totalPrice += 200
        } else if (element === "jacked") {
          totalPrice += 300
        }
      });
  
      consumables.forEach((element) => {
        if (element === "engine oil") {
          totalPrice += 70
        } else if (element === "oil filter") {
          totalPrice += 30
        }
      });
      if (discount) {
        totalPrice = totalPrice * 0.9;
        return `You spend $${totalPrice.toFixed(2)} for equipment and consumables with 10% discount!`
      } else {
        return `You spend $${totalPrice.toFixed(2)} for equipment and consumables!`
      }
  
    }
  };

  describe("MotorcycleRider tests for exam 07/12/2022 JS Advanced Retake", function() {
    describe("Tests for method licenseRestriction of object Motorcycle Rider.", function() {
        it("licenceRestriction return correct string response with category AM when category given is AM", function() {
            expect(motorcycleRider.licenseRestriction("AM")).to.be.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        });
        it("licenceRestriction return correct string response with category A1 when category given is A1", function() {
            expect(motorcycleRider.licenseRestriction("A1")).to.be.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        });
        it("licenceRestriction return correct string response with category A2 when category given is A2", function() {
            expect(motorcycleRider.licenseRestriction("A2")).to.be.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        });
        it("licenceRestriction return correct string response with category A when category is A", function() {
            expect(motorcycleRider.licenseRestriction("A")).to.be.equal("No motorcycle restrictions, and the minimum age is 24.")
        });
        it("licenceRestriction throws Error when an invalid category is specified when invalid category is given", function() {
            expect(() => {motorcycleRider.licenseRestriction("invalid")}).to.throw("Invalid Information!")
        });
     });

     describe("Tests for method motorcycleShowroom of object Motorcycle Rider.", function (){
        it("Test that method motorcycleShowroom applies valid validation for array input", function(){
            expect(() => {motorcycleRider.motorcycleShowroom("invalid", 60)}).to.throw("Invalid Information!")
        })
        it("Test that method motorcycleShowroom applies valid validation for number input", function(){
            expect(() => {motorcycleRider.licenseRestriction([1, 2, 3], "invalid")}).to.throw("Invalid Information!")
        })
        it("Test that method motorcycleShowroom applies valid validation when length of array below 1", function(){
            expect(() => {motorcycleRider.licenseRestriction([], 60)}).to.throw("Invalid Information!")
        })
        it("Test that method motorcycleShowroom applies valid validation when engineVolume below 50", function(){
            expect(() => {motorcycleRider.licenseRestriction([1, 2, 3], 29)}).to.throw("Invalid Information!")
        })
        it("Test that method motorcycleShowroom reurns correct ammount of bikes matching the given criteria", function(){
            expect(motorcycleRider.motorcycleShowroom([1, 2, 3, 4, 5, 6], 60)).to.be.equal("There are 0 available motorcycles matching your criteria!")
        })
     })

     describe("Tests for method otherSpendings of object MotorcycleRider", function(){
        it("Test that method otherSpendings throws an error when first parameter is not an array", function(){
            expect(() => {motorcycleRider.otherSpendings("invalid", [], true)}).to.throw("Invalid Information!")
        })
        it("Test that method otherSpendings throws an error when second parameter is not an array", function(){
            expect(() => {motorcycleRider.otherSpendings([], "invalid", false)}).to.throw("Invalid Information!")
        })
        it("Test that method otherSpendings throws an error when third parameter is not a boolean", function(){
            expect(() => {motorcycleRider.otherSpendings([], [], "invalid")}).to.throw("Invalid Information!")
        })
        it("Test that method otherSpendings correctly applies a discount to the end result", function(){
            expect(motorcycleRider.otherSpendings(["jacket"], ["oil filter"], true)).to.be.equal("You spend $27.00 for equipment and consumables with 10% discount!")
        })
        it("Test that method otherSpendings returns correct price when no discount applied", function(){
            expect(motorcycleRider.otherSpendings(["jacket"], ["oil filter"], false)).to.be.equal("You spend $30.00 for equipment and consumables!")
        })
     })
});
