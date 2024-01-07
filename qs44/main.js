"use strict";
//  44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function sandwich(items, quantity) {
    return `these items i want on a sandwich:(${items.join(" , ")}),and Quantity:${quantity}`;
}
//calling func
console.log(sandwich(["chicken", "egg",], 2));
console.log(sandwich(["chicken", "egg", "colslaw"], 3));
console.log(sandwich(["chicken", "egg", "colslaw", "cucumber"], 1));
