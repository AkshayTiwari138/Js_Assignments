//Quesation 21.	A brick measures 15 cm in length, 8 cm in breadth and 5 cm in height. How many bricks will be used to make a wall of length 15 m, breadth 10 m and height 8 metres? 

  const brickLenght = 15;
  const brickBreadth = 8;
  const brickHeight = 5;

  const wallLenght =  15 * 100;
  const wallBreadth = 8 * 100;
  const wallHeight = 4 * 100;

  const brickVolume = brickLenght * brickBreadth * brickHeight ;

  const wallVolume = wallLenght * wallBreadth * brickHeight ;

  const numberOfBricks = wallVolume / brickVolume ;

  console .log("Number  of  bricks needed", numberOfBricks); //Number  of  bricks needed 10000