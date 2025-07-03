//Quesation 1: The perimeter of a rectangle is 230 cm. If the length of the rectangle is 70 cm, find its breadth and area. 

let perimeter =230;
let length = 70;

let breadth = ( perimeter / 2) - length;

let area = length * breadth;

console.log("Breadth of the rectangle is: " + breadth + " cm");
console.log("Area of the rectangle is: " + area + " cm²");
