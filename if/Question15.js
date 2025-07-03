
//Quesation 15.	Shelly has a rectangular garden of length 22 m and breath 15 m. Her friend Rachel has a square garden of side 21 m. Whose garden is bigger and by how much? 

 let lengthShelly=22;
 let breadthShelly= 15;

 let sideRachel = 21;

 let areaShelly = lengthShelly  * breadthShelly;
 let areaRachel = sideRachel * sideRachel;
 
 let difference = Math.abs(areaShelly - areaRachel);

 if (areaShelly > areaRachel) {
    console.log("Shelly's garden is bigger by " + difference + " m²");
} else if (areaRachel > areaShelly) {
    console.log("Rachel's garden is bigger by " + difference + " m²");
} else {
    console.log("Both gardens are of the same size.");
} //Rachel's garden is bigger by 111 m²
