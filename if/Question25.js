
 //Quesation 25.	100 bricks of length 24 cm and breadth 15 cm are used to tile a path of a garden. What is the area of the path? 

 let brickLenght =24;
 let brickBreadth = 15;

 let numberOfBricks = 100;

 let areaOfOneBrick = brickLenght * brickBreadth;

 let totalAreaCm2 = areaOfOneBrick * numberOfBricks;

 let totalAreaM2 = totalAreaCm2 / 10000;

console.log("Area of the path in square centimeters: " + totalAreaCm2 + " cm²");//Area of the path in square centimeters: 36000 cm²
console.log("Area of the path in square meters: " + totalAreaM2 + " m²");//Area of the path in square meters: 3.6 m²

