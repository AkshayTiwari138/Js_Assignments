
//Quesation 14.	The length of one of the diagonals of a field in the form of a quadrilateral is 46 m. The perpendicular distance of the other two vertices from the diagonal are 13 m and 10 m, find the area of the field. 

let diagonal = 46;
let height1= 13;
let height2 = 10;


let area1  = 0.5 *diagonal * height1;
let area2 = 0.5  * diagonal * height2;

let totalArea = area1 + area2 ;

console.log("Area of the field :" + totalArea + "cm"); //Area of the field :529cm
