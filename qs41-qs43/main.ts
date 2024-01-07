// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
const magician_names:string[]=["david copper","MJ","aladin","sindbad"]
// function show_magicians(){

// console.log(magician_names.join(" , "));

// }
//calling func
//show_magicians()
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
// function make_great()
// { 
//     magician_names.splice(0,4,"the Great david copper","the Great MJ","the Great aladin","the Great sindbad") 
//     return magician_names   
// }
// function show_magicians(){

//     return(`${make_great()}`);
    
// }
// //calling func
// console.log(show_magicians());

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function make_great()
{ 
    const modifiedMagician:string[]=[];
    for(let i=0;i<magician_names.length;i++){
     modifiedMagician.push(`the Great ${magician_names[i]}`);
    }
    return modifiedMagician    
}
function show_magicians(){

    console.log(magician_names.join(" , "));
    console.log(make_great().join(" , "));
    
}
//calling func
show_magicians()