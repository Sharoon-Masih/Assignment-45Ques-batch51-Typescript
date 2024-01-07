"use strict";
// //23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let city:string="karachi"
// console.log("is city === 'karachi' ? ");
// console.log("true, city === ",city);
// city="lahore"
// console.log("is city === 'karachi' ?");
// console.log("false, city === ",city);
// city="islamabad"
// console.log("is city === 'islamabad' ?");
// console.log("true, city === ",city,);
// city="peshawar"
// console.log("is city === 'islamabad' ?");
// console.log("false, city === ",city);
// let male:boolean=true
// console.log("is male === true");
// console.log("yes its true, male === ",male);
// let Num:number=10
// console.log("is Num === 10 ");
// console.log("true, Num === ",Num);
// Num=100
// console.log("is Num === 10 ");
// console.log("false, Num === ",Num);
// Num=101
// console.log("is Num === 101 ");
// console.log("true, Num === ",Num);
// Num=200
// console.log("is Num === 101 ");
// console.log("false, Num === ",Num);
// let mobile:string="Apple"
// console.log("is mobile === 'apple' ");
// console.log("false it is false bcuz of case sensitive, mobile === ",mobile);
// mobile='samsung'
// console.log("is mobile === samsung ");
// console.log("true, mobile === ",mobile);
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // • Tests for equality and inequality with strings
// let str:string="abcdef"
// console.log("is str === abcdef");
// console.log("true, str === ",str);
// str="abcd"
// console.log("is str === abcdef");
// console.log("false,str != ",str);
// let num:number=200
// console.log("is num === '200'");
// console.log("false,it is false bcuz 200 is a number value not string, num === ",num);
// console.log("is num === 200");
// console.log("true,num === ",num);
// // • Tests using the lower case function
// let upperCase:string="IPHONE"
// console.log("is upperCase === IPHONE ?" )
// console.log("true, upperCase === IPHONE ?" )
// let UpperCase=upperCase.toLowerCase()
// console.log("is UpperCase === IPHONE ?" )
// console.log("false, UpperCase === ",UpperCase )
// // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// //equality and inequality
// let number:number=50
// console.log("is number === 50");
// console.log("true, number === 50");
// number=55
// console.log("is number === 50");
// console.log("false , number != 50 , number === ",number);
// //greater than and less than
// console.log("is number < 50");
// console.log("false, number === ",number);
// number=60
// console.log("is number > 50");
// console.log("true, number === ",number);
// console.log("is number > 60");
// console.log("false, number === ",number);
// //greater than or equal to, and less than or equal to
// let userAge:number=20
// console.log("is userAge >= 18");
// console.log("true,userAge === ",userAge);
// userAge=18
// console.log("is userAge >= 18");
// console.log("true,userAge === ",userAge);
// userAge=17
// console.log("is userAge >= 18");
// console.log("false,userAge === ",userAge);
// userAge=16
// console.log("is userAge <= 18");
// console.log("true,userAge === ",userAge);
// userAge=19
// console.log("is userAge <= 18");
// console.log("false,userAge === ",userAge);
// userAge=18
// console.log("is userAge >= 18");
// console.log("true,userAge === ",userAge);
// // • Tests using "and" and "or" operators
// //using &&(AND)
// let person1:string="student"
// let person2:string="teacher"
// console.log("if person1===student && person2===teacher" );
// console.log("true, person1===student && person2===teacher" );
// person1="teacher"
// console.log("if person1===student && person2===teacher" );
// console.log("false, person1=== ",person1," && person2===teacher" );
// person2="student"
// console.log("if person1===student && person2===teacher" );
// console.log("false, person1===student && person2=== ",person2 );
// person1="teacher"
// person2="student"
// console.log("if person1===student && person2===teacher" );
// console.log("false, person1=== ",person1," && person2=== ",person2 );
// //using ||(OR)
// console.log("if person1===student || person2===teacher" );
// console.log("true, person1===student and person2===teacher" );
// person1="teacher"
// console.log("if person1===student || person2===teacher" );
// console.log("true, person1=== ",person1," but person2===teacher" );
// person2="student"
// console.log("if person1===student || person2===teacher" );
// console.log("true,bcuz person1===student ")
// person1="teacher"
// person2="student"
// console.log("if person1===student || person2===teacher" );
// console.log("false, person1=== ",person1," and person2=== ",person2 );
// • Test whether an item is in a array
const Arr = ["shoes", "phone", "cloth", "watch"];
for (const item of Arr) {
    if (item === "phone") {
        console.log("true ,yes phone is present in this array ");
    }
}
// • Test whether an item is not in a array
for (const item of Arr) {
    if (item != "perfume") {
        console.log("true,yes perfume is not present in this array ");
    }
}
