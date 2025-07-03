
//Quesation 26.	How many bricks will be required to lay a path 120 m long and 2.4 m breadth if a brick is 24 cm long and 15 cm wide?


let pathLenght =120;
let pathBreadth = 2.4;

let brickLenght = 24;
let brickWidth = 15;

let pathLenghtCm = pathLenght * 100;
let pathBreadthCm = pathBreadth * 100;

let pathAreaCm = pathLenghtCm * pathBreadthCm;

let brickAreaCm = brickLenght * brickWidth ;

let numberOfBricks = Math.ceil(pathAreaCm / brickAreaCm);


console.log("Number of bricks required: " + numberOfBricks);//Number of bricks required: 8000


