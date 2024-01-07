/*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
console.log("\t\t My Favourite Modes of Transportation\t\t\n");
var myArr = ['Yamaha R1 Bike', 'Honda cg125', 'Honda Civic', 'Nissan Gtr', 'Toyota Revo'];
var mAp = myArr.map(function (mode) {
    return ("I would like to own a ".concat(mode));
});
console.log(mAp.join('\n'));
