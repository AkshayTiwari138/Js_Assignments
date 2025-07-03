
  //Quesation 5. If it costs 1600 rs. to fence a rectangular park of length 20 m at the rate of 25 rs. per m², find the breadth of the park and its perimeter. Also, find the area of the field. 

  let totalCost = 1600;
  let ratePerMeter = 25;
  let length =20;
  let perimeter = totalCost / ratePerMeter;

  let breadth = (perimeter / 2) -length;

  let are = length * breadth;

  console.log("breadth of the park" + breadth + "eters"); //breadth of the park12eters
   console.log("perimeter of the park" + perimeter + "eters"); //perimeter of the park64eters
    console.log("are of the park" + are + "square meters"); //are of the park240square meters
