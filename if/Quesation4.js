
 //Quesation 4.	Find the cost of tiling a rectangular plot of land 300 m long and 150 m wide at the rate of $6 per hundred square m.  

 let length = 300;
 let width = 150;

 let ratePer100SqM = 6;

 let area  = length * width;

  let cost = (area / 100) * ratePer100SqM;

  console.log(cost); // 2700

