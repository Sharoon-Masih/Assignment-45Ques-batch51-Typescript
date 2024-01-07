/*14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
 let like:string[]=['Benny','Aleem','Danish','Shaleem','Faisal'];
 like.map((person)=>
 {
    console.log(`Hey ${person}, I would like to invite you to the Dinner tonight `)
 })
console.log('\n');

/*15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.*/

/*• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.*/
 let cannotAttend:string="Faisal";
let filter:string[]=like.filter((person)=> person !== cannotAttend)
filter.map((person)=>{
console.log(`Hey ${person}, I would like to invite you to the Dinner tonight `)
})
console.log(`Mr ${cannotAttend}, cannot come to the Dinner\n`);

// /*• Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.*/

 like[like.indexOf(cannotAttend)]="Obaid" 

// // /*• Print a second set of invitation messages, one for each person who is still
// // in your list.*/
like.map((person)=>
  {
     console.log(`Hey ${person}, I would like to invite you to the Dinner tonight `)
  })
  console.log('\n');

// /*16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.*/

// /*
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.*/
  like.map((person)=>
    {
     console.log(`Hey ${person},I have found a Bigger Dinner Table So, Now I would Like to Invite Three Peoples more. `)
    })
  console.log('\n');

// //• Add one new guest to the beginning of your array.
let newGuest:string="Moses"
 like.unshift(newGuest);
// //• Add one new guest to the middle of your array.
let newGuestMid:string="Abraham"
 like.splice(3,0,newGuestMid); // or we can use this method also to find mid of array : let midIndex=like.length/2 //now .length/2 will divide the length of array with 2 and return the mid index value.
// //• Use append() to add one new guest to the end of your list.//as append() is not Typescript built-in method So in TS we can use push().
 let newGuestLast:string="Louis"
 like.push(newGuestLast);
// //• Print a new set of invitation messages, one for each person in your list.
  like.map((person)=>
  {
    console.log(`Hey ${person}, I would like to invite you to the Dinner tonight `)
  })
console.log('\n');

// //17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// //• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
   console.log(`Sorry Actually my New Dinner Table Will not Arrive at Time So, I can Invite only two people for Dinner\n`);
// /*• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.*/
   let count:number=like.length-1; //here we subtract 1 from length bcuz it gives count=8 but on index 8 we have nothing so thats why i subtract 1 from length so now it becomes 7.and now when we print console.log(`${like[count]} ,Sorry i cannot invite you to Dinner`) it starts from count=7 and so on.otherwise if i start from count=8 it gives undefined bcuz we have nothing on index 8 and when it pop() and count-- so count=7 so when this statemnet will print console.log(`${like[count]} ,Sorry i cannot invite you to Dinner`) it also give undefined bcuz of pop().
   while(count >1)
   {
    console.log(`${like[count]} ,Sorry i cannot invite you to Dinner`)
    like.pop()
    count--;
   }

// //• Print a message to each of the two people still on your list, letting them know they’re still invited.
like.map((person)=>
{
    console.log(`\nHey ${person}, you are still invited`);
})

// /*• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.*/
let remove:string[]=like.splice(0,2)
console.log("\nEmpty List: ",like);

 //19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the numberof people you are inviting to dinner.
 console.log(`${like.length} peoples are invited to Dinner`)



