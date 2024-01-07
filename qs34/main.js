"use strict";
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.
let pizzas = ["Fajita", "Creamy Tikka", "Afghani"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(`${pizzas[i]} Pizza`);
}
// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} Pizza`);
}
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
console.log("\t\t\tHow much you like the Pizza?\t\t\t");
console.log("I like Fajita Pizza Because its beauty and taste as it contains capsicums and mushrooms,\nwhereas i like Creamy Tikka because its spicy and creamy and last I like the Afghan Pizza \nbecause of its flavour. ");
console.log("\t\t\t   I really Love Pizza!\t\t\t");
