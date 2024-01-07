// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

// function make_shirt(size:number,text:string):string
// {
//     return(`Size of the shirt is: ${size} and text to be printed on it is: ${text}`)
// }
// //calling function
// console.log(make_shirt(15,"moye moye"));

// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(any_size?:number,text:string="I love Typescript",defaultSize:string="Large and Medium"):void
{
    if (!any_size )
    {
       {
        console.log(`make a shirt of  ${defaultSize} size and text to be printed on it is: ${text}`);
       }
    }
    else
    {
        console.log(`Size of the shirt is: ${any_size} and text to be printed on it is: ${text}`);
        
    }
     
}

