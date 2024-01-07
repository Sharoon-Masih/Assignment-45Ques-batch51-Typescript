"use strict";
//18. Seeing the World: Think of at least five places in the world you’d like to visit
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ["Maldives", 'Thailand', 'Dubai', 'Turkey', "America"];
//making copy of original array to be sorted.
let sortedArr = places.slice(0, 5);
//• Print your array in its original order.
console.log(places);
//• Print your array in alphabetical order without modifying the actual list.
let sort = sortedArr.sort();
console.log(sort);
//• Show that your array is still in its original order by printing it.
console.log(places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log(sortedArr.sort((a, b) => b.localeCompare(a)));
//• Show that your array is still in its original order by printing it again.
console.log(places);
//• Reverse the order of your list. Print the array to show that its order has changed.
let reverseOrder = places.reverse();
console.log(reverseOrder);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(reverseOrder.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(places.sort((a, b) => a.localeCompare(b)));
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(places.sort((a, b) => b.localeCompare(a)));
