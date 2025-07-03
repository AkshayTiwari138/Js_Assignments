
//Quesation 19.	A cube with an edge of 7 cm and a cuboid measuring 7 cm × 4 cm × 8 am are kept on a table. Which shape has more volume? 

const cubeEdge =7;
const cuboidLength = 7;
const cuboidBreadth = 4;
const cuboidHeight = 8;

const cubeVolume = cubeEdge ** 3;

const cuboidVolume = cuboidLength * cuboidBreadth * cuboidHeight;

if (cubeVolume > cuboidVolume) {
    console.log("The cube has more volume.");
} else if (cubeVolume < cuboidVolume) {
    console.log("The cuboid has more volume.");
} else {
    console.log("Both have the same volume.");
}//The cube has more volume.
