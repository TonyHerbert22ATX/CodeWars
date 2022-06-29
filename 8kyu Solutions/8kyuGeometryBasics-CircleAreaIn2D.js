// Represents a Circle where center is a Point and radius is a Number
class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
}
// Represents a Point where x and y are Numbers
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function circleArea(circle) {
return +(circle.radius ** 2 * Math.PI).toFixed(6)
}

console.log(circleArea(new Circle(new Point(10, 10), 30)));
