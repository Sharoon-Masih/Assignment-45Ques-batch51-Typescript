"use strict";
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
let alien_color1 = "green";
let player = "sharoon";
if (alien_color1 === "green") {
    console.log(`hey ${player}, you have earned 5 points`);
}
// • Write one version of this program that passes the if test 
let alien_color2 = "yellow";
if (alien_color2 === "yellow") {
    console.log(`hey ${player},you have earned 3 points bcuz you killed the yellow alien `);
}
// another that
// fails. (The version that fails will have no output.)
if (alien_color1 != "green" || alien_color2 != "yellow") {
    console.log("you are failed");
}
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color = "green";
if (alien_color === "green") {
    console.log(`${player} you have earned just 5 points for shooting the alien`);
}
else if (alien_color != "green") {
    console.log(`${player} you have earned just 10 points`);
}
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let Alien_color = "yellow";
if (Alien_color === "green") {
    console.log(`${player} you have earned  5 points for shooting the alien`);
}
else if (Alien_color === "yelow") {
    console.log(`${player} you have earned  10 points for shooting the alien`);
}
else if (Alien_color === "red") {
    console.log(`${player} you have earned  15 points for shooting the alien`);
}
