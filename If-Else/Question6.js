//  Question 6.	Check Leap Year - Write a program to check whether a given year is a leap year. 

let year = 2028;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(year +  " Is a leep year");
} else {
    console.log( year +  " is not leep year");
}