//  Question 10.Grade System - Write a program to display grade based on percentage:
//     90-100: A
//     80-89: B
//     70-79: C
//     60-69: D     <60: F

let maks= 70;
if(maks >= 90 && maks<=100){
    console.log( "A Grade")
} else if(maks >80 && maks <=89){
    console.log("B Grade ")
} else if(maks >= 70 && maks <=79){
    console.log("C Grade");
} else if(maks >=60 && maks <= 69){
    console.log("D Grade")
} else if(maks <33){
    console.log("You Are Filed");
}

