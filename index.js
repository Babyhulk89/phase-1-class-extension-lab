class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Getter method to count the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Getter method to calculate the perimeter of the polygon
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    // Getter method to check if the given sides form a valid triangle
    get isValid() {
      const [a, b, c] = this.sides;
      return a + b > c && b + c > a && c + a > b;
    }
  }
  
  class Square extends Polygon {
    // Getter method to check if the given sides form a valid square
    get isValid() {
      const [a, b, c, d] = this.sides;
      return a === b && b === c && c === d;
    }
  
    // Getter method to calculate the area of the square
    get area() {
      return this.sides[0] ** 2;
    }
  }
  
  // Example usage:
  const triangle = new Triangle([3, 4, 5]);
  console.log(triangle.countSides); // Output: 3
  console.log(triangle.perimeter); // Output: 12
  console.log(triangle.isValid); // Output: true
  
  const square = new Square([4, 4, 4, 4]);
  console.log(square.countSides); // Output: 4
  console.log(square.perimeter); // Output: 16
  console.log(square.isValid); // Output: true
  console.log(square.area); // Output: 16
  