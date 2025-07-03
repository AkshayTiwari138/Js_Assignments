// Question 11. WAP to calculate the sum of given series 1 - 2 + 3 - 4 + 5 - 6................n terms 

let i = 1;
let sum =5;

while(i<=10){
    if(i % 2 === 0){
        sum = sum + i;
    } else{
        sum = sum - i;
    }
    i++;
}
console.log(sum);