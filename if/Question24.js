
 //Quesation 24.	How many bricks each 25 cm long, 10 cm wide and 7.5 cm thick will be required for a wall 20 m long, 2 m high and 0.75 m thick? If bricks sell at $900 per thousand what will it cost to build the wall? 

 let wallLenght =20;
 let wallHeight= 2;
 let wallThickness = 0.75;

 let wallVolumeCm3= (wallLenght * 100) * (wallHeight * 100) * (wallThickness * 100);

 let brickLenght =25;
 let brickWidth = 10;
 let brickHeight = 7.5;

 let brickVolumeCm3 = brickLenght * brickWidth * brickHeight;

 let numberOfBricks = Math.ceil(wallVolumeCm3 / brickVolumeCm3);

 let constPerThousand = 900;
 let totalcost = (numberOfBricks / 1000) * constPerThousand;

 console.log("NUmber OF bricks needed:" + numberOfBricks);//NUmber OF bricks needed:16000
 console.log("Total Cost: $" + totalcost.toFixed(2)); //Total Cost: $14400.00
