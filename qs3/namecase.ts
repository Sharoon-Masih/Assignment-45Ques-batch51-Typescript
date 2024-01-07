let Name:string = "sharoon masih"
// step 1
// to lowercase
let lowcase : string  =Name.toLowerCase();
console.log("name of person is :",lowcase);
// step 2
// to uppercase
let uppercase : string =Name.toUpperCase();
console.log("name of person in uppercase is:",uppercase);
//step 3
//to titlecase
//first method
console.log(Name.charAt(0).toUpperCase()+Name.slice(1,Name.length))

//second method
let toLow: string = Name.toLowerCase()
let Str:string[]=Name.split(' ');//basically we use the split method to seprate the object of string into array of string .e.g:the string is written as "sharoon masih" but when we use split() it makes it like this : "sharoon","masih" .//syntax of split(seprator,limit) //the seprator parameter takes the charactor which we want to use for split like: "",'' or ``.//the limit parameter takes the integer value that specify the limit on the number of splits we want.like: Name.split(' ',4) output will be ('s','h','a','r')
let arr=Str.map((up:string)=> up.charAt(0).toUpperCase()+up.slice(1).toLowerCase())
let arr1=arr.join(" ")//join method is use to join all element of array into string . e.g: Str=["sharoon","masih"] str.join(" ") output will be sharoon masih.// its syntax is .join(seprator) //seperator is the character we will use to join element if we use .join("+") so there will be + between every element and if write it as .join(" ") so there will be space b/w every element or we can also use anyother character. 
console.log(arr1);



