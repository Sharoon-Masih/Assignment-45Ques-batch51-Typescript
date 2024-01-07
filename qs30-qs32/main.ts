// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames:string[]=[/*"danish","aleem","sharoon","shaleem","admin"*/]
for (const user of userNames) {
    if(user ==="admin")
    {
        console.log("Hello admin,what you would like to see?");
        
    }
    else
    {
        console.log(`Hello ${user}, thank you for logging in again.`);
        
    }
}

// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

if (userNames[0] === undefined ) //yaha humna 0 index pa undefined iss liya kia hai bcuz as we know array is always started from 0 index so agar 0 index hi undefined hoga so its mean whole array is empty 
{
    console.log("We to find some users!");
    
}



// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users:string[]=["benny","romail","obaid","danica","muqadas"]
let new_users:string[]=["jane","jesica","harry","DANICA","Muqadas"]
let i:number=0;
for (const user of new_users) {
     
    if (user === current_users[i] || user === current_users[i].toUpperCase() || user === current_users[i].charAt(0).toUpperCase()+current_users[i].slice(1)) //user === current_users[i].charAt(0).toUpperCase()+current_users[i].slice(1) => yaha jo yeh statement likhi hai iska mtlb hai ka current_users[i] ki value ka agar first character b capital hoga but name same hoga toh it will genrate this message or jab humna charAt(0).toUpperCase() kia toh yeh srf first capital letter return kar raha tha for e.g: M , so baki ka letters ka lia we concatenate using (+) and then slice ka method use krka except 0 index sa agay ki jo b character hoga wo concatenate hojaye ga so it will return whole word here for e.g: Muqadas.
    {
        console.log(`${user},you need to Enter a new username.`)
    }
    else
    {
        console.log(` username ${user} is available.`);
        
    }
    i++;
}


