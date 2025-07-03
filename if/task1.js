// function checkEvenOdd(number) {
//   if (number % 2 == 0) {
//     return `Even : ${number}`;
//   }

//   return `Odd : ${number}`;
// }

// let aun = checkEvenOdd(31);

// console.log("Answer : ", aun);

//  Print student marks according to to dividion 60% A , 60 less then B 44 less C 33 Fail

// let maks = 60;
// if(maks>=60){
//     console.log("A",);
// } if(maks>=44){
//     console.log("B");
// }
// if(maks>=33){
//     console.log("Fail")
// }



// function sum (x,y){
//     s =x + y;
//     return s;

// }
// let val = sum(3, 4);
// console.log(val);



//Quesation2.	The area of a rectangle is 96 cm². If the breadth of the rectangle is 8 cm, find its length and perimeter.  

// let area = 96;
// let breadth =8;

// let length = area / breadth;

// let perimeter = 2 * (length + breadth);


// console.log("Length of the rectangle is: " + length + " cm"); //Length of the rectangle is: 12 cm
// console.log("Perimeter of the rectangle is: " + perimeter + " cm"); //Perimeter of the rectangle is: 40 cm

//Quesation 3.	How many tiles whose length and breadth are 13 cm and 7 cm respectively are needed to cover a rectangular region whose length and breadth are 520 cm and 140 cm?  

// let tileLength = 13;
// let tileBreadth = 7;

// let regionLength = 520;
// let regionBreadth = 140;

// let tileArea = tileBreadth * tileLength;
// let regionArea = regionBreadth * regionLength;

// let numberOfTiles = regionArea / tileArea;
// console.log("NUmber of  tiles needed " + numberOfTiles);//NUmber of  tiles needed 800


 //Quesation 4.	Find the cost of tiling a rectangular plot of land 300 m long and 150 m wide at the rate of $6 per hundred square m.  

//  let length = 300;
//  let width = 150;

//  let ratePer100SqM = 6;

//  let area  = length * width;

//   let cost = (area / 100) * ratePer100SqM;

//   console.log(cost); // 2700

  //Quesation 5. If it costs 1600 rs. to fence a rectangular park of length 20 m at the rate of 25 rs. per m², find the breadth of the park and its perimeter. Also, find the area of the field. 

//   let totalCost = 1600;
//   let ratePerMeter = 25;
//   let length =20;
//   let perimeter = totalCost / ratePerMeter;

//   let breadth = (perimeter / 2) -length;

//   let are = length * breadth;

//   console.log("breadth of the park" + breadth + "eters"); //breadth of the park12eters
//    console.log("perimeter of the park" + perimeter + "eters"); //perimeter of the park64eters
//     console.log("are of the park" + are + "square meters"); //are of the park240square meters


//Quesation 6.Find the area of a triangle, sides of which are 10 cm and 9 cm and the perimeter 36 cm. 

// let sideA =10;
// let sideB = 9;
// let perimeter = 36;

// let sideC = perimeter - ( sideA + sideB);

// let s = perimeter / 2;

// let area = Math.sqrt(s *(s - sideA)* (s - sideB) * (s - sideC));

// console.log("Third side of the triangle: " + sideC + " cm");//Third side of the triangle: 17 cm
// console.log("Semi-perimeter: " + s + " cm");//Semi-perimeter: 18 cm
// console.log("Area of the triangle: " + area.toFixed(2) + " cm²"); //Area of the triangle: 36.00 cm²

//Quesation 7.	Find the height of a triangle whose base is 50 cm and whose area is 500 cm². 

// let area = 500;
// let base = 50;

// let height = (2 * area) / base;

// console.log(height); // Height of the triangle: 20 cm



//Quesation 8.Find the base of a triangle whose altitude is 20 cm and area is 0.8 m². 

// let area = 0.8;
// let heightCm = 20;

// let height = heightCm / 100;

// let base = (2 * area) /height;
// console.log("Base of the triangle: " + base + " meters"); //Base of the triangle: 8 meters


//Quesation 9. Find the area of an equilateral triangle, the length of whose sides is 12 cm. 

// let side = 12;
 
// let area = (Math.sqrt(3)/ 4) * Math.pow(side,2);

// console.log("Area Of the equilateral triangle:" + area.toFixed(2)+ "cm");//Area Of the equilateral triangle:62.35cm

//Quesation 10.Find the area of an isosceles right angled triangle of equal sides 15 cm each. 
// let side = 15;

// let area = 0.5 * side * side;

// console.log("Area of the isosceles right-angled triangle:"+ area +"cm");//Area of the isosceles right-angled triangle:112.5cm


//Quesation 11.	The base and height of a triangle are in the ratio 8 : 5 and its area is 320 m². Find the height and base of the triangle. 

// let area = 320;
// let ratioBase = 8;
// let reatioHeight=5;

// let xSquared = area / 20;
// let x = Math.sqrt(xSquared);

// let base = ratioBase * x;
// let height = reatioHeight * x;

// console.log("base of the  triangle:" + base + " m "); //base of the  triangle:32 m 
// console.log("base of the  triangle:" + height + " m "); //base of the  triangle:20 m 


//Quesation 12.	Find the area of a right angled triangle whose hypotenuse is 13 cm and one of its sides containing the right angle is 12 cm. Find the length of the other side. 

// let hypotenuse = 13;
//  let side1 = 12;

//  let side2 = Math.sqrt(Math.pow(hypotenuse,2)- Math.pow(side1,2 ));

//  let area = 0.5 * side1 * side2;

//  console.log("other side  of the  triangle" + side2 +  "mc"); //other side  of the  triangle5mc
//   console.log("Area of the triangle " + area +  "mc"); //Area of the triangle 30mc


//Quesation 13.	The area of a right triangle is 184 cm² and one of its legs is 16 cm long. Find the length of other leg. 

// let area = 184;
// let leg1= 16;

// let leg2 = (2 * area) / leg1;

// console.log("Length  of the other leg:" + leg2 + "cm");//Length  of the other leg:23cm


//Quesation 14.	The length of one of the diagonals of a field in the form of a quadrilateral is 46 m. The perpendicular distance of the other two vertices from the diagonal are 13 m and 10 m, find the area of the field. 

// let diagonal = 46;
// let height1= 13;
// let height2 = 10;


// let area1  = 0.5 *diagonal * height1;
// let area2 = 0.5  * diagonal * height2;

// let totalArea = area1 + area2 ;

// console.log("Area of the field :" + totalArea + "cm"); //Area of the field :529cm


//Quesation 15.	Shelly has a rectangular garden of length 22 m and breath 15 m. Her friend Rachel has a square garden of side 21 m. Whose garden is bigger and by how much? 

//  let lengthShelly=22;
//  let breadthShelly= 15;

//  let sideRachel = 21;

//  let areaShelly = lengthShelly  * breadthShelly;
//  let areaRachel = sideRachel * sideRachel;
 
//  let difference = Math.abs(areaShelly - areaRachel);

//  if (areaShelly > areaRachel) {
//     console.log("Shelly's garden is bigger by " + difference + " m²");
// } else if (areaRachel > areaShelly) {
//     console.log("Rachel's garden is bigger by " + difference + " m²");
// } else {
//     console.log("Both gardens are of the same size.");
// } //Rachel's garden is bigger by 111 m²

//Quesation 16.Tina wants a new carpet for her rectangular dining room. Her dining room is a 5 meters by 7 meters rectangle. How much carpet does she need to buy to cover her entire dining room. 

// let length = 7;
// let breadth = 5;

// let area = length * breadth;

// console.log("Tina needs " + area + " square meters of carpet.");//Tina needs 35 square meters of carpet.



//Quesation 17.	Luci is making a display board for the school exhibition. The display board is a 3 m by 2 m rectangle. He needs to add a ribbon border around the entire display board. What is the length of ribbon that he needs? 

//  let length = 3;
//   let breadth = 2;

//    let perimeter = 2 * (length + breadth);

// console.log("Luci needs " + perimeter + " meters of ribbon for the border.");//Luci needs 10 meters of ribbon for the border.



//Quesation 18.	Ron jogs around a rectangular park of length 50 m and breadth 30 m. If he takes 10 rounds of the park each day, how much distance does he cover in a day in km? 

// const length = 50;
// const breadth = 30;

// const perimeter = 2 *(length + breadth);

// const rounds = 10;

// const totalDistanceMeters =perimeter * rounds ;

// const totalDistanceKilometers = totalDistanceMeters / 1000;
 
// console.log("Ron covers" + totalDistanceKilometers + "kilometers in a day. ");//Ron covers1.6kilometers in a day.



//Quesation 19.	A cube with an edge of 7 cm and a cuboid measuring 7 cm × 4 cm × 8 am are kept on a table. Which shape has more volume? 

// const cubeEdge =7;
// const cuboidLength = 7;
// const cuboidBreadth = 4;
// const cuboidHeight = 8;

// const cubeVolume = cubeEdge ** 3;

// const cuboidVolume = cuboidLength * cuboidBreadth * cuboidHeight;

// if (cubeVolume > cuboidVolume) {
//     console.log("The cube has more volume.");
// } else if (cubeVolume < cuboidVolume) {
//     console.log("The cuboid has more volume.");
// } else {
//     console.log("Both have the same volume.");
// }//The cube has more volume.


//Quesation 20.	What is the volume of a brick of ice-cream with length 25 cm, breadth 10 cm and height 8 cm? 

  // let length = 25;
  // let breadth = 10;
  //  let height = 8;

  //  const volume = length * breadth * height
  
  //  console.log("Volume of the ice-cream brick is " + volume + " cm³."); //Volume of the ice-cream brick is 2000 cm³.

  //Quesation 21.	A brick measures 15 cm in length, 8 cm in breadth and 5 cm in height. How many bricks will be used to make a wall of length 15 m, breadth 10 m and height 8 metres? 

  // const brickLenght = 15;
  // const brickBreadth = 8;
  // const brickHeight = 5;

  // const wallLenght =  15 * 100;
  // const wallBreadth = 8 * 100;
  // const wallHeight = 4 * 100;

  // const brickVolume = brickLenght * brickBreadth * brickHeight ;

  // const wallVolume = wallLenght * wallBreadth * brickHeight ;

  // const numberOfBricks = wallVolume / brickVolume ;

  // console .log("Number  of  bricks needed", numberOfBricks); //Number  of  bricks needed 10000

  
 //Quesation 22.	A pond is 50 m long, 30 m wide and 2 m deep. Find the capacity of the pond in cubic metre. 

//  const length =50;
//  const width = 30;
//  const depth = 2;

//  const capacity = length * width * depth;

// console.log("Capacity of the pond is:", capacity, "cubic metres (m³)");//Capacity of the pond is: 3000 cubic metres (m³)
 


  //Quesation 23.	Find the number of cubical boxes of cubical side 3 cm which can be accommodated in carton of dimensions 15 cm × 9 cm × 12 cm.
  
//   const cartonLength = 15;
//   const cartonWidth = 9;
//   const cartonHeight = 12;
//   const boxSide = 3;

//   const boxesLength = Math.floor(cartonLength / boxSide);
//   const boxesWidth = Math.floor(cartonWidth / boxSide);
//   const boxesHeight = Math.floor(cartonHeight / boxSide);

//   const totalBoxes = boxesLength * boxesWidth  *boxesWidth ;

// console.log("Number of boxes that can be accommodated:", totalBoxes);//Number of boxes that can be accommodated: 45
  

 //Quesation 24.	How many bricks each 25 cm long, 10 cm wide and 7.5 cm thick will be required for a wall 20 m long, 2 m high and 0.75 m thick? If bricks sell at $900 per thousand what will it cost to build the wall? 

//  let wallLenght =20;
//  let wallHeight= 2;
//  let wallThickness = 0.75;

//  let wallVolumeCm3= (wallLenght * 100) * (wallHeight * 100) * (wallThickness * 100);

//  let brickLenght =25;
//  let brickWidth = 10;
//  let brickHeight = 7.5;

//  let brickVolumeCm3 = brickLenght * brickWidth * brickHeight;

//  let numberOfBricks = Math.ceil(wallVolumeCm3 / brickVolumeCm3);

//  let constPerThousand = 900;
//  let totalcost = (numberOfBricks / 1000) * constPerThousand;

//  console.log("NUmber OF bricks needed:" + numberOfBricks);//NUmber OF bricks needed:16000
//  console.log("Total Cost: $" + totalcost.toFixed(2)); //Total Cost: $14400.00
 


 //Quesation 25.	100 bricks of length 24 cm and breadth 15 cm are used to tile a path of a garden. What is the area of the path? 

//  let brickLenght =24;
//  let brickBreadth = 15;

//  let numberOfBricks = 100;

//  let areaOfOneBrick = brickLenght * brickBreadth;

//  let totalAreaCm2 = areaOfOneBrick * numberOfBricks;

//  let totalAreaM2 = totalAreaCm2 / 10000;

// console.log("Area of the path in square centimeters: " + totalAreaCm2 + " cm²");//Area of the path in square centimeters: 36000 cm²
// console.log("Area of the path in square meters: " + totalAreaM2 + " m²");//Area of the path in square meters: 3.6 m²



//Quesation 26.	How many bricks will be required to lay a path 120 m long and 2.4 m breadth if a brick is 24 cm long and 15 cm wide?


// let pathLenght =120;
// let pathBreadth = 2.4;

// let brickLenght = 24;
// let brickWidth = 15;

// let pathLenghtCm = pathLenght * 100;
// let pathBreadthCm = pathBreadth * 100;

// let pathAreaCm = pathLenghtCm * pathBreadthCm;

// let brickAreaCm = brickLenght * brickWidth ;

// let numberOfBricks = Math.ceil(pathAreaCm / brickAreaCm);


// console.log("Number of bricks required: " + numberOfBricks);//Number of bricks required: 8000


