
  //Quesation 23.	Find the number of cubical boxes of cubical side 3 cm which can be accommodated in carton of dimensions 15 cm × 9 cm × 12 cm.
  
  const cartonLength = 15;
  const cartonWidth = 9;
  const cartonHeight = 12;
  const boxSide = 3;

  const boxesLength = Math.floor(cartonLength / boxSide);
  const boxesWidth = Math.floor(cartonWidth / boxSide);
  const boxesHeight = Math.floor(cartonHeight / boxSide);

  const totalBoxes = boxesLength * boxesWidth  *boxesWidth ;

console.log("Number of boxes that can be accommodated:", totalBoxes);//Number of boxes that can be accommodated: 45
