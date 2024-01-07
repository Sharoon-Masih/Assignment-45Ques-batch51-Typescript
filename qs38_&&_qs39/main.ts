// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
let describe_city=(city:string,country:string="pakistan"):string =>{
    return(`${city} is in ${country}`);
    
}
//calling function
console.log(describe_city("karachi"));
console.log(describe_city("sydney","Australia"));
console.log(describe_city("islamabad","pakistan"));

// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

function city_country(city:string,country:string):string
{
    return(`"${city.charAt(0).toUpperCase()+city.slice(1)}, ${country.charAt(0).toUpperCase()+country.slice(1)}"`)
}
//calling function
console.log(city_country("multan","pakistan"));
console.log(city_country("perth","australia"));
console.log(city_country("multan","pakistan"));
