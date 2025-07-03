
//Quesation 12.	Find the area of a right angled triangle whose hypotenuse is 13 cm and one of its sides containing the right angle is 12 cm. Find the length of the other side. 

let hypotenuse = 13;
 let side1 = 12;

 let side2 = Math.sqrt(Math.pow(hypotenuse,2)- Math.pow(side1,2 ));

 let area = 0.5 * side1 * side2;

 console.log("other side  of the  triangle" + side2 +  "mc"); //other side  of the  triangle5mc
  console.log("Area of the triangle " + area +  "mc"); //Area of the triangle 30mc
