class Point{
    constructor(x, y){
        this.x = x
        this.y = y
    }

    static distance(point_1, point_2){
        return Math.sqrt((point_2.x - point_1.x)**2 + (point_2.y - point_1.y)**2)
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
