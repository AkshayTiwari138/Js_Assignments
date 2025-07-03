
//Quesation 3.	How many tiles whose length and breadth are 13 cm and 7 cm respectively are needed to cover a rectangular region whose length and breadth are 520 cm and 140 cm?  

let tileLength = 13;
let tileBreadth = 7;

let regionLength = 520;
let regionBreadth = 140;

let tileArea = tileBreadth * tileLength;
let regionArea = regionBreadth * regionLength;

let numberOfTiles = regionArea / tileArea;
console.log("NUmber of  tiles needed " + numberOfTiles);//NUmber of  tiles needed 800
