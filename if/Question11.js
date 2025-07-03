
//Quesation 11.	The base and height of a triangle are in the ratio 8 : 5 and its area is 320 m². Find the height and base of the triangle. 

let area = 320;
let ratioBase = 8;
let reatioHeight=5;

let xSquared = area / 20;
let x = Math.sqrt(xSquared);

let base = ratioBase * x;
let height = reatioHeight * x;

console.log("base of the  triangle:" + base + " m "); //base of the  triangle:32 m 
console.log("base of the  triangle:" + height + " m "); //base of the  triangle:20 m 
