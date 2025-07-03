//  Question 7. WAP to print the series 1 4 9 16 25................n terms 


let a=0;
let b=1;
console.log(a); 
console.log(b);

for(let i=1; i<=8; i++){
    let temp =a+b;
    console.log(temp);
    a=b;
    b=temp;
}