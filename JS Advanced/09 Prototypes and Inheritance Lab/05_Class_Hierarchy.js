function returnHierarchy(){
    class Figure{
        constructor(propertyUnits="cm"){
            this.propertyUnits = propertyUnits
        }

        get area(){

        }

        changeUnits(value){
            if (["cm", "mm", "m"].includes(value)){
                this.propertyUnits = value
            }
        }

        toString(){
            return `Figures units: ${this.propertyUnits}`
        }

        adjustUnits(value, units){
            let unitsTable = {
                "mm": 10,
                "cm": 1,
                "m": 0.1
            }
            return value * unitsTable[units]
        }
    }

    class Circle extends Figure{
        constructor(radius, propertyUnits="cm") {
            super(propertyUnits)
            this._original_radius = radius
        }

        get area(){
            return Math.PI * this.radius ** 2
        }

        get radius(){
            return this.adjustUnits(this._original_radius, this.propertyUnits)
        }
        
        toString(){
            return `Figures units: ${this.propertyUnits} Area: ${this.area} - radius: ${this.radius}`
        }


    }

    class Rectangle extends Figure{
        constructor(width, height, propertyUnits="cm"){
            super(propertyUnits)
            this._width = width
            this._height = height
        }

        get area(){
            return this.width * this.height
        }

        get width(){
            return this.adjustUnits(this._width, this.propertyUnits)
        }

        get height(){
            return this.adjustUnits(this._height, this.propertyUnits)
        }

        toString(){
            return `Figures units: ${this.propertyUnits} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }



    return {Figure,
            Circle,
            Rectangle}
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
