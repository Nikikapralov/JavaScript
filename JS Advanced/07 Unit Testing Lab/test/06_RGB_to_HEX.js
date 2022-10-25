const { expect } = require("chai");

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe("rgbToHexColor test", function(){
    it("Function returns undefined when red not an integer", function(){
        expect(rgbToHexColor("string", 10, 10)).to.be.undefined
    }),

    it("Function returns undefined when green not an integer", function(){
        expect(rgbToHexColor(10, "g", 10)).to.be.undefined
    }),

    it("Function returns undefined when blue not an integer", function(){
        expect(rgbToHexColor(10, 10, "b")).to.be.undefined
    }),

    it("Function returns undefined when red under 0", function(){
        expect(rgbToHexColor(-10, 10, 10)).to.be.undefined
    }),

    it("Function returns undefined when green under 0", function(){
        expect(rgbToHexColor(10, -10, 10)).to.be.undefined
    }),

    it("Function returns undefined when blue under 0", function(){
        expect(rgbToHexColor(10, 10, -10)).to.be.undefined
    }),

    it("Function returns undefined when red over 255", function(){
        expect(rgbToHexColor(256, 10, 10)).to.be.undefined
    }),

    it("Function returns undefined when green over 255", function(){
        expect(rgbToHexColor(255, 256, 10)).to.be.undefined
    }),

    it("Function returns undefined when blue over 255", function(){
        expect(rgbToHexColor(255, 10, 256)).to.be.undefined
    }),

    it("Function returns correct hex combination", function(){
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000')
    }),

    it("Function returns output as string", function(){
        expect(typeof rgbToHexColor(0, 0, 0)).to.be.string
    }),

    it("Function returns undefined when rgb not integers", function(){
        expect(rgbToHexColor([], {}, 'ast')).to.be.undefined
    }),

    it("Function returns correct hex combination when more than 3 parameters given", function(){
        expect(rgbToHexColor(0, 0, 0, 0)).to.be.equal("#000000")
    })

})