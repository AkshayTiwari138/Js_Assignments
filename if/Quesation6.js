
//Quesation 6.Find the area of a triangle, sides of which are 10 cm and 9 cm and the perimeter 36 cm. 

let sideA =10;
let sideB = 9;
let perimeter = 36;

let sideC = perimeter - ( sideA + sideB);

let s = perimeter / 2;

let area = Math.sqrt(s *(s - sideA)* (s - sideB) * (s - sideC));

console.log("Third side of the triangle: " + sideC + " cm");//Third side of the triangle: 17 cm
console.log("Semi-perimeter: " + s + " cm");//Semi-perimeter: 18 cm
console.log("Area of the triangle: " + area.toFixed(2) + " cm²"); //Area of the triangle: 36.00 cm²
