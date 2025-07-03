
//Quesation 18.	Ron jogs around a rectangular park of length 50 m and breadth 30 m. If he takes 10 rounds of the park each day, how much distance does he cover in a day in km? 

const length = 50;
const breadth = 30;

const perimeter = 2 *(length + breadth);

const rounds = 10;

const totalDistanceMeters =perimeter * rounds ;

const totalDistanceKilometers = totalDistanceMeters / 1000;
 
console.log("Ron covers" + totalDistanceKilometers + "kilometers in a day. ");//Ron covers1.6kilometers in a day.
