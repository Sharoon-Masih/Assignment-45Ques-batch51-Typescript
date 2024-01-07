"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let favorite_fruits = ["mango", "chiko", "banana"];
for (const fruit of favorite_fruits) {
    if (fruit === "chiko") {
        console.log(`you really like ${fruit}s`);
    }
    if (fruit === "apple") {
        console.log(`you really like ${fruit}s`);
    }
    if (fruit === "mango") {
        console.log(`you really like ${fruit}es`);
    }
    if (fruit === "pear") {
        console.log(`you really like ${fruit}s`);
    }
    if (fruit === "banana") {
        console.log(`you really like ${fruit}s`);
    }
}
